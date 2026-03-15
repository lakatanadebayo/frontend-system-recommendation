import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecommendationService} from "../../service/recommendation/recommendation.service";
import {LearningPath} from "../../entity/LearningPath";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../service/data/data.service";
import {Subject, takeUntil} from "rxjs";
import {User} from "../../entity/User";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent implements OnInit, OnDestroy {

  localAuthStatus: boolean = false
  localUser: User
  learningPaths: LearningPath[] = []
  learningPathForm: FormGroup

  private destroy$ = new Subject<void>()

  constructor(private dataService : DataService, private recommendationService : RecommendationService,
              private userService : UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initLearningPathForm()
    this.getAuthStatusFromDataService()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getAuthStatusFromDataService(): void {
    this.dataService.authStatus$.pipe(takeUntil(this.destroy$)).subscribe(authStatus => {
      this.localAuthStatus = authStatus
    })
  }

  getUserFromDataService(): void {
    this.dataService.user$.pipe(takeUntil(this.destroy$)).subscribe(user => {
      this.localUser = user
    })
  }

  initLearningPathForm(){
    this.learningPathForm = this.formBuilder.group({
      username: ['']
    })
  }

  getRecommendationByUsername(username: string){
    this.recommendationService.getRecommendationByUsername(username).subscribe({
      next: learningPathsFromApi => {
        this.learningPaths = learningPathsFromApi;
      },
      error: error => console.log(error)
    })
  }

  submitLearningPathFormForm(){
    const learningPathFormValues = this.learningPathForm.value
    const username = learningPathFormValues['username']

    if (!username || username.trim() === '') {
      this.learningPaths = []
      return
    }

    this.getRecommendationByUsername(username)
  }

  terminerCours(id: any) {
    this.getUserFromDataService();
    this.localUser.completedCoursesIds.push(id)
    this.userService.updateUser(this.localUser.id, this.localUser).subscribe({
      next: () => {
        this.dataService.setUser(this.localUser)
        this.getUserFromDataService()
        this.getRecommendationByUsername(this.localUser.username)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
