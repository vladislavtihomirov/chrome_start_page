import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { ApiComponent } from './api/api.component';
import { RancherComponent } from './rancher/rancher.component';
import { GitlabComponent } from './gitlab/gitlab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildComponent,
    ApiComponent,
    RancherComponent,
    GitlabComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Home'
}
