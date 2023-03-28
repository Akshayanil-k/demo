import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {

  constructor(private router:Router){}

  logOut(){
    localStorage.clear()
    this.router.navigate(['./login'])

  }
}
