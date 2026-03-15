import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data/data.service";
import {LearningPath} from "../../entity/LearningPath";
import {RessourceService} from "../../service/ressource/ressource.service";

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.scss'
})
export class RessourceComponent {

  localIsUpdateProcess: boolean
  learningPath: LearningPath
  learningPaths: LearningPath[] = []
  id: any = null

  constructor(private formBuilder: FormBuilder, private ressourceService: RessourceService, private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllLearningPath()
  }

  getAllLearningPath(){
    this.ressourceService.getAllLearningPath().subscribe({
      next:learningPathsFromApi => {
        this.learningPaths = learningPathsFromApi
      },
      error:error => console.log(error)
    })
  }

}
