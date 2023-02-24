import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-form', pathMatch: 'full' },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
