import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecommendationRoutingModule} from "./recommendation-routing.module";
import {RecommendationComponent} from "../../../component/recommendation/recommendation.component";
import {ShareModule} from "../../share/share.module";


@NgModule({
  declarations: [RecommendationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecommendationRoutingModule,
    ShareModule
  ]
})
export class RecommendationModule { }
