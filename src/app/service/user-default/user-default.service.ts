import { Injectable } from '@angular/core';
import {User} from "../../entity/User";

@Injectable({
  providedIn: 'root'
})
export class UserDefaultService {

  private readonly defaultUser: User = {
    id: null,
    username: 'Test',
    password: 'Test',
    level: 'Test',
    domain: 'Test',
    language: 'Test',
    completedCoursesTags: [],
    completedCoursesIds: []
  }

  getDefaultUser(): User {
    // Retourne une copie pour éviter que quelqu’un modifie directement l’original
    return { ...this.defaultUser }
  }
}
