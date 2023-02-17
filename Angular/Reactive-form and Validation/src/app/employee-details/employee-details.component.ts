import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm!: FormGroup;
  submitted: boolean = true;
  formData: any;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.maxLength(15)]
    });
  }
  
  //onSubmit() {
   // 
  //}
  onSubmit() {
    console.log(this.employeeForm.value);
    this.submitted = true;
    this.formData = this.employeeForm.value;
  }
  
}
