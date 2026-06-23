import { Component } from '@angular/core';
import {User} from "../../entity/User";
import {LearningPath} from "../../entity/LearningPath";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {DataService} from "../../service/data/data.service";
import {RecommendationService} from "../../service/recommendation/recommendation.service";
import {UserService} from "../../service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-custom-recommandation',
  templateUrl: './custom-recommandation.component.html',
  styleUrl: './custom-recommandation.component.scss'
})
export class CustomRecommandationComponent {

  localUsername: string
  learningPaths: LearningPath[] = []

  private destroy$ = new Subject<void>()

  constructor(private dataService : DataService, private recommendationService : RecommendationService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsernameFromDataService()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getUsernameFromDataService(): void {
    this.dataService.username$.pipe(takeUntil(this.destroy$)).subscribe(username => {
      this.localUsername = username
      this.getRecommendationByUsername(this.localUsername)
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

}
