import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  username:string;
  constructor() { 
    this.username=localStorage.getItem('username');
  }

  ngOnInit() {
  }
  public  navigations=[{
    name:"Home",
    link:"/home"
   },
   {name:"Onboarding Form",
    link:"/board"}
    ,
   {name:"Students List",
    link:"/studentsList"}
 ]
}
