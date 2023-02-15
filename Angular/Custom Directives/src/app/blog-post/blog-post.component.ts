import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() title: string='';
  @Input() content: string='';
  @Input() imageUrl: string='';
  @Input() imageAlt: string='';
  @Input() author: string='';
  @Input() date: string='';
}
