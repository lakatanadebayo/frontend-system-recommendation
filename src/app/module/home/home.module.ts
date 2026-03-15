import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "../../component/home/home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {TopMenuModule} from "../top-menu/top-menu.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopMenuModule
  ]
})
export class HomeModule { }
