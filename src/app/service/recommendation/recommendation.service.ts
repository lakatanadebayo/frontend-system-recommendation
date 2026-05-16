import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Global} from "../../../global";

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  getRecommendationByUsername(username: string): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/recommendations/"+username);
  }

  getRecommendation(domain: string, level: string, language: string): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/recommendations/"+domain);
  }
}
