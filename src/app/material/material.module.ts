import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatGridListModule,
  MatRippleModule
  } from '@angular/material';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatRippleModule
  ],
  exports:[
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatRippleModule
    ],
  declarations: []
})
export class MaterialModule { }