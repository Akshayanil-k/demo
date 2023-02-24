import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  //employeeData: any;
  
  employeeForm = {
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    education: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: ""
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Access the data passed from the previous component using ActivatedRoute
    const routeSnapshot = this.route.snapshot as ActivatedRouteSnapshot & {data: {employeeData: any}};
    this.employeeForm = routeSnapshot.data.employeeData;
    if (this.employeeForm) {
      console.log(this.employeeForm.firstName);
    }
    //console.log("employeeData");
    //console.log("hi");
    //console.log("employeeData.firstName");
    //console.log(this.employeeData.firstName);

  }

}


