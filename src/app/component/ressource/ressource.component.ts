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

  currentFonction: {} = {}
  currentIndex = -1

  page = 1
  count = 0
  pageSize = 10

  searchTerm: string = ''

  sortColumn = ''
  sortDirection = 'asc'

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

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllLearningPath();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getAllLearningPath();
  }

  refreshList(): void {
    this.getAllLearningPath();
    this.currentFonction = {};
    this.currentIndex = -1;
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.learningPaths.sort((a, b) => {
      const valA = a[column]?.toString().toLowerCase() || '';
      const valB = b[column]?.toString().toLowerCase() || '';

      if (this.sortDirection === 'asc') {
        return valA.localeCompare(valB);
      } else {
        return valB.localeCompare(valA);
      }
    });
  }

}
