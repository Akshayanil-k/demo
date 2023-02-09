import { Component, OnInit } from '@angular/core';
export class Profile {
  name: string = 'Akshay_k';
  location: string = 'Calicut';
  bio: string = 'I am a Trainee in Front-End';
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile = new Profile();

  constructor() { }

  ngOnInit() {
  }

}
