import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecommendationRoutingModule} from "./recommendation-routing.module";
import {RecommendationComponent} from "../../../component/recommendation/recommendation.component";
import {LanguageLabelPipe} from "../../../pipe/LanguageLabelPipe";


@NgModule({
  declarations: [RecommendationComponent, LanguageLabelPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecommendationRoutingModule
  ]
})
export class RecommendationModule { }
