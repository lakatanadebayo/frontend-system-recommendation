import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RessourceComponent} from "../../../component/ressource/ressource.component";
import {RessourceRoutingModule} from "./ressource-routing.module";


@NgModule({
  declarations: [RessourceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RessourceRoutingModule
  ]
})
export class RessourceModule { }
