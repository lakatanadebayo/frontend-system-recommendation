import { Injectable } from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../entity/User";
import {UserCredentials} from "../../entity/UserCredentials";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  saveUser(user: User): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/etudiant/save/one", user)
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.httpClient.put(this.baseUrl+"/etudiant/update/"+id, user)
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/etudiant/find/all")
  }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/etudiant/get/"+id)
  }

  getAllDomains(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/cours/find/all/domains")
  }

  login(userCredentials: UserCredentials): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/etudiant/login", userCredentials)
  }
}
