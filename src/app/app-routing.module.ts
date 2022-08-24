import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BuildComponent} from "./build/build.component";
import {ApiComponent} from "./api/api.component";
import {RancherComponent} from "./rancher/rancher.component";
import {GitlabComponent} from "./gitlab/gitlab.component";


const routes: Routes = [
  { path: '', children: [
    { pathMatch: 'full', path: '', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'build', component: BuildComponent },
    { path: 'api', component: ApiComponent },
    { path: 'rancher', component: RancherComponent },
    { path: 'gitlab', component: GitlabComponent },
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
