import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';
import { Phone1Component } from './phones/phone1/phone1.component';
import { AboutUsComponent } from './home/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonesComponent,
    Phone1Component,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
