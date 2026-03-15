import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TopMenuComponent} from "../../component/top-menu/top-menu.component";



@NgModule({
  declarations: [TopMenuComponent],
  exports: [
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TopMenuModule { }
