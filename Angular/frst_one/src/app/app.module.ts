import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InnerBannerComponent } from './inner-banner/inner-banner.component';
import { HomeComponent } from './home/home.component';
import { QuotesSectionComponent } from './quotes-section/quotes-section.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Footerr2Component } from './footerr2/footerr2.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InnerBannerComponent,
    HomeComponent,
    QuotesSectionComponent,
    ContactComponent,
    FooterComponent,
    Footerr2Component,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
