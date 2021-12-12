import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { LocalStoageHandlerService } from 'src/app/services/local-stoage-handler.service';

import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogsArticlesArr: BlogModel[] = [];

  noImgPath: string = "../../assets/no-img.jpg";
  constructor(private localStorageHandler: LocalStoageHandlerService) { }

  ngOnInit(): void {

    this.blogsArticlesArr = this.localStorageHandler.getAllBlogs();

    if (this.blogsArticlesArr.length == 0) {
      const timer: any = setTimeout(() => {
        this.blogsArticlesArr = this.localStorageHandler.getAllBlogs();
      }, 1000);
    }
    //this.blogsArticlesArr.slice(0, 2);
  }

}
