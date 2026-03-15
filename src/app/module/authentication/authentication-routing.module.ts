import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AuthenticationComponent} from "../../component/authentication/authentication.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: '', component: AuthenticationComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
