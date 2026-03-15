import {Injectable} from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {LearningPath} from "../../entity/LearningPath";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  /*saveLearningPath(LearningPath: learningPath): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/cours/save/one", learningPath)
  }*/

  updateLearningPath(id: number, learningPath: LearningPath): Observable<any> {
    return this.httpClient.put(this.baseUrl+"/cours/update/"+id, learningPath)
  }

  getAllLearningPath(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/cours/find/all")
  }

  getLearningPathById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/cours/get/"+id)
  }
}
