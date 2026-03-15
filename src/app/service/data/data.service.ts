import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../entity/User";
import {UserDefaultService} from "../user-default/user-default.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isUpdateProcess = new BehaviorSubject<boolean>(false);
  isUpdateProcess$ = this.isUpdateProcess.asObservable();

  private authStatus = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatus.asObservable();

  private user = new BehaviorSubject<User>(this.userDefaultService.getDefaultUser());
  user$ = this.user.asObservable();

  constructor(private userDefaultService: UserDefaultService) { }

  setIsUpdateProcess(isUpdateProcess: boolean) {
    this.isUpdateProcess.next(isUpdateProcess);
  }

  setAuthStatus(authStatus: boolean) {
    this.authStatus.next(authStatus);
  }

  setUser(user: User) {
    this.user.next(user);
  }
}
