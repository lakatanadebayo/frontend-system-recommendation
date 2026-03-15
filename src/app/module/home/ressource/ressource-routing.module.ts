import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {RessourceComponent} from "../../../component/ressource/ressource.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: '', component: RessourceComponent}
    ])
  ],
  exports: [RouterModule]
})
export class RessourceRoutingModule { }
