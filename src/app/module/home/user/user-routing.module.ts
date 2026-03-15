import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserComponent} from "../../../component/user/user.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: '', component: UserComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
