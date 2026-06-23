import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../../component/home/home.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'user', loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)},
      { path: 'ressource', loadChildren: () => import('./ressource/ressource-routing.module').then(m => m.RessourceRoutingModule)},
      { path: 'recommandation', loadChildren: () => import('./recommendation/recommendation-routing.module').then(m => m.RecommendationRoutingModule)},
      { path: 'custom-recommandation', loadChildren: () => import('./custom-recommandation/custom-recommandation-routing.module').then(m => m.CustomRecommandationRoutingModule)},
      {path: '', component: HomeComponent}
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
