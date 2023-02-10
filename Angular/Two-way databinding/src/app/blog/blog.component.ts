import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts = [
    { title: 'My First Blog Post', content: 'Brands grow because they focus on getting new customers' },
    { title: 'My Second Blog Post', content: 'Brands grow because they have more mental and physical availability' },
    { title: 'My Third Blog Post', content: 'Brands grow because of behaviorally loyal buyers' }
  ];

  selectedPost: any;

  onSelect(post: any) {
    this.selectedPost = post;
  }
}
