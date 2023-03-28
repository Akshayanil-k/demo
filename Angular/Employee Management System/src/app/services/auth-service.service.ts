import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userDetails:any=[]


  constructor(private service:ApiService, private router:Router) { }

  checkLogin(email:any,password:any){
    this.service.getEmp().subscribe(res=>{     // getting employee details 
      this.userDetails=res
      let found = false;   //  to check if username and password are valid
      for (let i = 0; i < this.userDetails.length; i++) {

        
       
    if (email=='admin@gmail.com' && password=='Admin@123') {
      localStorage.setItem('user','admin')
      this.router.navigate(['./hr-dashboard']);
      found = true;
        return;
    } else if(email==this.userDetails[i].email && password==this.userDetails[i].password){
      localStorage.setItem('user','employee')
      this.router.navigate(["./employee-dashboard",this.userDetails[i].id]);
      found = true;
        return;
    }
    console.log(this.userDetails[i].email,email);
    console.log(this.userDetails[i].password,password);
    
  }
  alert('Invalid username or password'); // display alert message username and psw valid or not
  });
  }
}
