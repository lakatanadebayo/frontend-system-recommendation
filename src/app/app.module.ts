import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecommendationModule} from "./module/home/recommendation/recommendation.module";
import {UserModule} from "./module/home/user/user.module";
import {TopMenuModule} from "./module/top-menu/top-menu.module";
import {AuthenticationModule} from "./module/authentication/authentication.module";
import {HomeModule} from "./module/home/home.module";
import {RessourceModule} from "./module/home/ressource/ressource.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule,
    RecommendationModule,
    RessourceModule,
    TopMenuModule,
    AuthenticationModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
