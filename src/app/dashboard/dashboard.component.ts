import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardHeader = "DashBoard";
  constructor() { }

  ngOnInit() {
  }

  dashdetails=[{
    name: "John"
  },
  {
    name: "Max"
  },
  {
    name: "Peter"
  }];

}