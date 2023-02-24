import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-form', pathMatch: 'full' },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent }

  
];



@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
