import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatGridListModule,
  MatRippleModule,
  MatCardModule,
  MatButtonModule
  } from '@angular/material';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatCardModule,
    MatButtonModule
    ],
  declarations: []
})
export class MaterialModule { }