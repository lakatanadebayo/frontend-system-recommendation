import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "../../../component/user/user.component";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
