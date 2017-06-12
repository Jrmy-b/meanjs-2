import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// FONT AWESOME
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

// APP ROUTING
import { AppRoutingModule } from './app-routing.module';

// APP COMPONENTS
import { AppComponent } from ".";

import { CoreModule, StoreModule } from "app/core";
import { HomeModule } from 'app/home';
import { ArticlesConfigModule } from 'app/articles/config';
import { UsersModule } from "app/users";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    StoreModule,
    CoreModule,
    UsersModule.forRoot(),
    ArticlesConfigModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    BrowserModule
  ],
  providers: [
    OverlayContainer],
  bootstrap: [AppComponent]

})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
