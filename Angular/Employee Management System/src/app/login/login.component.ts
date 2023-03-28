import { Component } from '@angular/core';
import {  Router, UrlSerializer } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthServiceService } from '../services/auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userData={
    email:'',
    password:''
  }
  userDetails:any=[]
  constructor( private authService:AuthServiceService){}


  onSubmit( ){
    localStorage.setItem('currentUser',JSON.stringify(this.userData));
    this.authService.checkLogin(this.userData.email,this.userData.password)

    
  }
  

}

