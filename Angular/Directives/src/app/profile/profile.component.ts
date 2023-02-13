import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
  })
  export class ProfileComponent implements OnInit {
    users = [
      { name: 'John', email: 'john@123.com',place:'kerala'},
      { name: 'Manu', email: 'manu@abc.com',place:'Goa' },
      { name: 'Ammu', email: 'ammu@abc1.com' ,place:'Assam'}
    ];
    isHighlighted: boolean = true;
  
    constructor() { }
  
    ngOnInit() {
    }
    changeStyle() {
      this.isHighlighted = !this.isHighlighted;
    }
    
  }
  

