import { Component, OnInit } from '@angular/core';
import {BlogService} from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private blogList;

  constructor(public blogService: BlogService) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }

  ngOnInit() {
  }

}
