import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguageLabelPipe} from "../../pipe/LanguageLabelPipe";



@NgModule({
  declarations: [LanguageLabelPipe],
  imports: [CommonModule],
  exports: [LanguageLabelPipe]
})
export class ShareModule { }
