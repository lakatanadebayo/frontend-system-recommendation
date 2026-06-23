import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomRecommandationRoutingModule} from "./custom-recommandation-routing.module";
import {CustomRecommandationComponent} from "../../../component/custom-recommandation/custom-recommandation.component";


@NgModule({
  declarations: [CustomRecommandationComponent],
  imports: [
    CommonModule,
    CustomRecommandationRoutingModule
  ]
})
export class CustomRecommandationModule { }
