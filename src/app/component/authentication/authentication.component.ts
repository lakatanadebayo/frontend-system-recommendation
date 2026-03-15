import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../entity/User";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {UserService} from "../../service/user/user.service";
import {DataService} from "../../service/data/data.service";
import {Router} from "@angular/router";
import {UserCredentials} from "../../entity/UserCredentials";
import {UserDefaultService} from "../../service/user-default/user-default.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnInit {

  authenticationErrorMessage: string
  authenticationForm: FormGroup
  submitted= false
  user: User
  isAuthenticated: boolean = true

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService,
              private userService: UserService, private dataService: DataService, private router: Router,
              private userDefaultService: UserDefaultService) { }

  ngOnInit(): void {
    this.authenticationForm = this.formBuilder.group({
      username: [null],
      password: [null]})
  }

  submitAuthenticationForm(){
    this.submitted = true
    this.login()
  }

  login() {
    const { username, password } = this.authenticationForm.value;
    const userCredentials = new UserCredentials(username, password)

    this.userService.login(userCredentials).subscribe({
      next: userFromApi => {
        if (!userFromApi || userFromApi.id === null) {
          this.handleAuthFailure('Nom d\'utilisateur et/ou mot de passe incorrects')
          return
        }

        this.user = userFromApi
        this.dataService.setAuthStatus(true)
        this.dataService.setUser(this.user)
        this.home()
      },
      error: error => console.error(error)
    })
  }

  home() {
    this.router.navigate(['app/home/recommandation'])
  }

  private handleAuthFailure(message: string) {
    this.authenticationErrorMessage = message
    this.dataService.setAuthStatus(false)
    this.dataService.setUser(this.userDefaultService.getDefaultUser())
    this.router.navigate(['app/authentication'])
  }

}
