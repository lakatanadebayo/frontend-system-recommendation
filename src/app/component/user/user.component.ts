import {Component, OnInit} from '@angular/core';
import {User} from "../../entity/User";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  localIsUpdateProcess: boolean
  user: User
  users: User[] = []
  userForm: FormGroup
  id: any = null

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getIsUpdateProcessFromDataService()
    this.getAllUser()
    this.initUserForm()
  }

  getIsUpdateProcessFromDataService(): void {
    this.dataService.isUpdateProcess$.subscribe(isUpdateProcess => {
      this.localIsUpdateProcess = isUpdateProcess
    })
  }

  initUserForm(){
    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
      level: [''],
      domain: [''],
      language: [''],
      completedCoursesIds: this.formBuilder.array([]),
      completedCoursesTags: [[]]
    })

    if (this.localIsUpdateProcess) {
      this.id = this.activatedRoute.snapshot.params['id']
      this.getUserById(this.id)
    }
  }

  get completedCoursesIds(): FormArray {
    return this.userForm.get('completedCoursesIds') as FormArray;
  }

  addCourseId(courseId: string) {
    if (courseId) {
      this.completedCoursesIds.push(this.formBuilder.control(courseId));
    }
  }

  removeCourseId(index: number) {
    this.completedCoursesIds.removeAt(index);
  }

  saveUser(){
    const userFormValues = this.userForm.value
    const isUpdate = this.localIsUpdateProcess
    const userObject = new User(isUpdate ? this.id : null, userFormValues['username'], userFormValues['password'], userFormValues['level'],
      userFormValues['domain'], userFormValues['language'], userFormValues['completedCoursesTags'], userFormValues['completedCoursesIds'])

    const userServiceCall = isUpdate ? this.userService.updateUser(this.id, userObject) : this.userService.saveUser(userObject)

    userServiceCall.subscribe({
      next: () => {
        if (isUpdate) {
          this.dataService.setIsUpdateProcess(false)
          this.initUserForm()
          this.getAllUser()
        } else {
          this.initUserForm()
          this.getAllUser()
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  updateUser(id: any) {
    this.id = id;
    const selectedUser = this.users.find(u => u.id === id)
    if (selectedUser) {
      this.userForm.patchValue({ username: selectedUser.username, password: selectedUser.password, level: selectedUser.level,
        domain: selectedUser.domain, language: selectedUser.language,
        completedCoursesTags: selectedUser.completedCoursesTags, completedCoursesIds: selectedUser.completedCoursesIds})
    }

    this.dataService.setIsUpdateProcess(true);
  }

  getAllUser(){
    this.userService.getAllUser().subscribe({
      next:usersFromApi => {
        this.users = usersFromApi
      },
      error:error => console.log(error)
    })
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (userFromApi) => this.userForm.patchValue(userFromApi),
      error: (error) => console.error('Erreur lors de la récupération de l\'utilisateur :', error)
    })
  }

  submitUserForm(){
    this.saveUser()
  }

}
