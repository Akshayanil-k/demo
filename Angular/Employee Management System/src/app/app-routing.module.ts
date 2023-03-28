import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard/authguard.guard';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmpGuardGuard } from './emp-guard.guard';
import { EmployeeseditComponent } from './employees-edit/employees-edit.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path : "", component:LoginComponent },
  { path : "hr-dashboard", component:HrDashboardComponent ,canActivate:[AuthguardGuard] },
  { path : "employee-dashboard/:id", component:EmployeeDashboardComponent ,canActivate:[EmpGuardGuard]},
  { path : "employee-list", component:EmployeesListComponent },
  { path : "employee-reg", component:EmployeeRegistrationComponent },
  { path : "employee-edit/:id", component:EmployeeseditComponent },
  { path : "apply-leave/:id", component:LeaveApplyComponent },
  { path : "employee-details/:id", component:EmployeeDetailsComponent },

  
  { path:'**', redirectTo:"" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
