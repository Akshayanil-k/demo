import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm!: FormGroup;
  submitted: boolean = true;
  employeeData={
    firstName:"",
    lastName:"",
    age:"",
    phoneNumber:"",
    education: "",
    address:"",
    email:"",
    password:"",
    confirmPassword:"", 
    message:""
  }
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      age: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required, Validators.maxLength(50)]] ,
      education: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]] ,
      password: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16})')]] ,
      confirmPassword: ['', Validators.required],
      message: ['', Validators.maxLength(15)],
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
  
  onSubmit(empform:FormGroup) {
    
      if(empform.valid){
       console.log("true");
       
      }
    
    this.employeeData.firstName=empform.value.firstName
    this.employeeData.lastName=empform.value.lastName
    this.employeeData.age=empform.value.age
    this.employeeData. phoneNumber=empform.value. phoneNumber
    this.employeeData.address=empform.value.address
    this.employeeData.education=empform.value.education
    this.employeeData.email=empform.value.email
    this.employeeData. password=empform.value.password
    this.employeeData. confirmPassword=empform.value. confirmPassword
    this.employeeData.message=empform.value.message
    console.log(this.employeeData);
    this.submitted = true;
    //const employeeData = this.employeeForm.value;
    this.employeeForm
    this.router.navigate(['/employee-details'], { state: { data:this.employeeData } });
  }

}

//this.router.navigate(['/employee-details'], { state: { data: this.employeeData } });
