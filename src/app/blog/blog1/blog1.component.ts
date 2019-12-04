import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {

  private blogList;

  constructor(public blogService: BlogService) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }

  ngOnInit() {
  }

}
