import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CustomRecommandationComponent} from "../../../component/custom-recommandation/custom-recommandation.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: '', component: CustomRecommandationComponent}
    ])
  ],
  exports: [RouterModule]
})
export class CustomRecommandationRoutingModule { }
