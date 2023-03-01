import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  error!: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'user' && this.password === 'password') {
      localStorage.setItem('currentUser', JSON.stringify({ username: this.username }));
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid username or password';
      
    }
  }

}
