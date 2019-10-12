import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatGridListModule,
  MatRippleModule,
  MatCardModule
  } from '@angular/material';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatCardModule
  ],
  exports:[
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatCardModule
    ],
  declarations: []
})
export class MaterialModule { }