import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { HomeRoutingModule } from './home-routing.module';
import { Child2Component } from './child/child2/child2.component';



@NgModule({
  declarations: [
    ChildComponent,
    Child2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
