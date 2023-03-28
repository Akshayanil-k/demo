import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { TableEmpComponent } from './table-emp/table-emp.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeseditComponent } from './employees-edit/employees-edit.component';
import { DatePipe } from '@angular/common';
//import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
//import { EmployeeComponent } from './employees-list/employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HrDashboardComponent,
    EmployeeDetailsComponent,
    EmployeeRegistrationComponent,
    EmployeeDashboardComponent,
    LeaveApplyComponent,
    SideNavBarComponent,
    DoughnutChartComponent,
    BarChartComponent,
    TableEmpComponent,
    EmployeesListComponent,
    EmployeeseditComponent,
    //GaugeChartComponent,
    //EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxGaugeModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



