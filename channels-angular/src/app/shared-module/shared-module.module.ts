import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    // HttpModule,
    RouterModule
  ]
})
export class SharedModule { }
