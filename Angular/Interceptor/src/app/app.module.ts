import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressInterceptor } from 'ngx-progressbar/http';



import { AppComponent } from './app.component';
//import { PostsComponent } from './posts/posts.component';
//import { UsersComponent } from './users/users.component';
import { CustomHttpInterceptor } from './http.interceptor';

@NgModule({
  imports: [BrowserModule, HttpClientModule, NgProgressModule],
  declarations: [AppComponent],
 /* providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],*/
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgProgressInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    }
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}

