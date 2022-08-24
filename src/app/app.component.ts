import { Component } from '@angular/core';
import {Router} from "@angular/router";

export interface ColorScheme{
  primary: string;
  secondary: string;
  text: string;
  altText: string;
}

export interface SidebarItem{
  name: string;
  icon: string;
  link: string;
  is_active: boolean;
  colorScheme: ColorScheme;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarItems: SidebarItem[] = [
    {name: "Home", icon: "home", link: "/home", is_active: true, colorScheme: {primary: "#32a852",secondary: "#111", altText: "#333", text: ""}},
    {name: "Builds", icon: "handyman", link: "/build", is_active: false, colorScheme: {primary: "#fcba03",secondary: "#111", altText: "#333", text: ""}},
    {name: "API", icon: "router", link: "/api", is_active: false, colorScheme: {primary: "#eb4034",secondary: "#111", altText: "#333", text: ""}},
    {name: "Rancher", icon: "dns", link: "/rancher", is_active: false, colorScheme: {primary: "#4287f5",secondary: "#111", altText: "#333", text: ""}},
    {name: "GitLab", icon: "ramp_right", link: "/gitlab", is_active: false, colorScheme: {primary: "#fc7703",secondary: "#111", altText: "#333", text: ""}},
  ]
  activeSideBarItem: SidebarItem = this.sidebarItems[0];

  constructor(private router: Router) {
  }

  ngOnInit() {
    const href = window.location.href;
    console.log(href);
    this.sidebarItems.map(i=>i.is_active=false);
    this.sidebarItems.filter(i=>i.link.toLowerCase() == '/'+(href.split('/')[href.split('/').length - 1].toLowerCase()))[0].is_active = true;
    this.activeSideBarItem = this.sidebarItems.filter(i=>i.link.toLowerCase() == '/'+(href.split('/')[href.split('/').length - 1].toLowerCase()))[0];
  }

  navigate(s: SidebarItem): void{
    this.sidebarItems.map(i=>i.is_active=false);
    this.sidebarItems.filter(i=>i.name == s.name)[0].is_active = true;
    this.activeSideBarItem = this.sidebarItems.filter(i=>i.name == s.name)[0];
  }
}
