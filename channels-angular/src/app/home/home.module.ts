import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    homeRouting,
    SharedModule
  ]
})
export class HomeModule { }
