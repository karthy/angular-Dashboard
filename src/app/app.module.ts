import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { MaterialModule } from './material/material.module';
import { DashDetailComponent } from './dash-detail/dash-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule],
  declarations: [ AppComponent, DashboardComponent, NavDashboardComponent, DashDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
