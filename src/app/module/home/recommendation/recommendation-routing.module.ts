import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {RecommendationComponent} from "../../../component/recommendation/recommendation.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: '', component: RecommendationComponent}
    ])
  ],
  exports: [RouterModule]
})
export class RecommendationRoutingModule { }
