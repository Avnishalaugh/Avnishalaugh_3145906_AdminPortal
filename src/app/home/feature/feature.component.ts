import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router : Router)
  {
    this.routeLinks=[
      {
        label: 'Onboarding Form',
        link: '/board',
        index: 0
    }, {
        label: 'Students List',
        link: '/studentsList',
        index: 1
    }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
}

getActiveClass(indexOfRouteLink) {
  let tabsclass = 'mat-tab-link';
  if (this.activeLinkIndex === indexOfRouteLink) {
    tabsclass = 'mat-tab-link mat-tab-label-active';
  }

  return tabsclass;
}

}
