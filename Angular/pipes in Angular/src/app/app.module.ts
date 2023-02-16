import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StudentDetailsComponent, TitleCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
