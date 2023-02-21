import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  users: any;
  posts: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(data => {
      this.users = data;
    });

    this.api.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
