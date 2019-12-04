import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})
export class Blog2Component implements OnInit {

  private blogList;

  constructor(public blogService: BlogService) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }

  ngOnInit() {
  }

}
