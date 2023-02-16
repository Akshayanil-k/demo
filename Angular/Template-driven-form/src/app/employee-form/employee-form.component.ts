import { Component } from '@angular/core';

class Employee {
  name: string='';
  address: string='';
  dob: string='';
  email: string='';
  password: string='';
  phone: string='';
  pincode: string='';
  state: string='';
  country: string='';
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employee: Employee = new Employee();

  saveEmployee() {
    console.log(this.employee); // This will log the employee object to the console
  }
}
