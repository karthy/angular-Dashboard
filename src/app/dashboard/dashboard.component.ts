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

  citydetails=[{
    name: "New York",
    country: "United States",
    imageUrl: "https://i.pinimg.com/564x/46/f9/b1/46f9b19563eeb8eea20ea41836bfccd7.jpg"
  },
  {
    name: "Tokyo",
    country: "Japan",
    imageUrl:"https://i.pinimg.com/564x/af/9f/77/af9f77d226c128c0fef9312ca3efab87.jpg"
  },
  {
    name: "Peter"
  },];

}