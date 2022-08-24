import { Component, OnInit } from '@angular/core';

export interface BuildItem {
  link: string;
  name: string;
}
export interface BuildGroup{
  name: string;
  items: BuildItem[];
}

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  groups: BuildGroup[] = [
    {name: "Mobile", items: [
      {link: "https://jenkins.itcapital.io/job/_Investmate/job/ComiCoin%20Admin/build?delay=0sec", name: "ComiCoin Admin"},
      {link: "https://jenkins.itcapital.io/job/_Investmate/job/cryptogram-admin/build?delay=0sec", name: "CryptoGram Admin"},
      {link: "https://jenkins.itcapital.io/job/_Investmate/job/cryptoinvestmate-admin/build?delay=0sec", name: "CryptoInvestmate Admin"},
      {link: "https://jenkins.itcapital.io/job/_Investmate/job/edu-ingress/build?delay=0sec", name: "Ingress"},
    ]},
    {name: "Analytics", items: [
      {link: "https://jenkins.itcapital.io/job/__Marketing_Intelligence/job/mi-analytics-api/build?delay=0sec", name: "API"},
      {link: "https://jenkins.itcapital.io/job/__Marketing_Intelligence/job/mi-analytics-ingress/build?delay=0sec", name: "Ingress"},
      {link: "https://jenkins.itcapital.io/job/__Marketing_Intelligence/job/mi-analytics-ui/build?delay=0sec", name: "Angular"},
    ]},
    {name: "Creative System", items: [
      {link: "https://jenkins.itcapital.io/job/__Marketing_Intelligence/job/mi-creative-ui/build?delay=0sec", name: "Angular"},
      {link: "https://jenkins.itcapital.io/job/__Marketing_Intelligence/job/mi-creative-services-py/build?delay=0sec", name: "Python"},
      {link: "https://jenkins.itcapital.io/job/__Marketing_Intelligence/job/mi-creative-services/build?delay=0sec", name: "Backend"},
    ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
