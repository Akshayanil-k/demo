/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
}
*/

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="loading">Loading...</div>
    <ul *ngIf="users">
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
    <ul *ngIf="posts">
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
    <button (click)="getUsers()">Get Users</button>
    <button (click)="getPosts()">Get Posts</button>
  `,
})
export class AppComponent {
  loading = false;
  users: any;
  posts: any;

  constructor(private http: HttpClient) {}

  getUsers() {
    this.loading = true;
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => console.log(error)
    );
  }

  getPosts() {
    this.loading = true;
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        this.posts = data;
        this.loading = false;
      },
      (error) => console.log(error)
    );
  }
}
