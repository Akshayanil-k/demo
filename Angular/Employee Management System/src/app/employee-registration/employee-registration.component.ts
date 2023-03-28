import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent {
  

  constructor(private fb : FormBuilder,public service:ApiService, public router:Router){}


  

    regForm = this.fb.group({
    fname : ['', Validators.compose([Validators.required,Validators.pattern("[a-zA-Z ]*")])],
    lname : ['', Validators.compose([Validators.required,Validators.pattern("[a-zA-Z ]*")])],
    email : ['', Validators.compose([Validators.required,Validators.email,Validators.minLength(5)])],
    emprole : ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(25)])],
    age : ['', Validators.compose([Validators.required,Validators.pattern("[0-9]{2}$")])],
    dob : ['', Validators.compose([Validators.required])],
    gender : ['', Validators.compose([Validators.required])],
    bloodgroup : ['', Validators.compose([Validators.required])],
    phone : ['', Validators.compose([Validators.required,Validators.pattern("[0-9]{10}$")])],
    password :['', Validators.compose([Validators.required,Validators.pattern("(?=.*\)(?=.*[a-z])(?=.*[A-Z]).{8,15}")])],
    confirmpassword :['', Validators.compose([Validators.required,])],
    img : ['', Validators.compose([Validators.required])],
  },
  {
    validators:this.Mustmatch('password','confirmpassword')
  });

  Mustmatch(password:any,confirmpassword:any){
     return (formGroup:FormGroup)=>{
      const passwordcontrol=formGroup.controls[password];
      const confirmpasswordcontrol=formGroup.controls[confirmpassword];
      if(confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['Mustmatch']){
        return;
       }
      if(passwordcontrol.value!==confirmpasswordcontrol.value){
        
        confirmpasswordcontrol.setErrors({Mustmatch:true});
      }else{
         confirmpasswordcontrol.setErrors(null);
      
      } 
    
    };
  }
  
  regData:any='';


  onSubmit(form:FormGroup){ 
    this.regData=form.value;
    const imgFile = (<HTMLInputElement>document.getElementById('img'));
    if (imgFile && imgFile.files && imgFile.files.length > 0) {
      const imgName = imgFile.files[0].name;
      this.regData.img = '../assets/img/'+imgName;
    }
    this.service.postUser(this.regData).subscribe(res =>{
      console.log(res);
      alert("Registered")
      this.router.navigate(['/employee-list']);
      
    })
  }



}

