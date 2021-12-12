import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { LocalStoageHandlerService } from 'src/app/services/local-stoage-handler.service';

import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {


  blogsArticlesArr: BlogModel[] = [];

  noImgPath: string = "../../assets/no-img.jpg"
  constructor(private blogDataService: BlogDataService,
    private localStorageHandler: LocalStoageHandlerService,
    private router: Router) { }

  ngOnInit(): void {
    this.blogsArticlesArr = this.localStorageHandler.getAllBlogs();
  }

  readMore(Obj: any, index: any) {
    console.log("read more")
    this.router.navigate(['./blog/blog', { id: index, obj: JSON.stringify(Obj) }]);
  }

}
