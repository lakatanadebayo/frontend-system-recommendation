import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data/data.service";
import {UserDefaultService} from "../user-default/user-default.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private dataService: DataService, private router: Router, private userDefaultService: UserDefaultService) { }

  logout(){
    this.dataService.setAuthStatus(false)
    this.dataService.setUser(this.userDefaultService.getDefaultUser())
    this.dataService.setIsUpdateProcess(false)
    this.router.navigate(['app'])
  }
}
