import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatGridListModule
  } from '@angular/material';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  exports:[
    MatSidenavModule,
    MatGridListModule,
    BrowserAnimationsModule
    ],
  declarations: []
})
export class MaterialModule { }