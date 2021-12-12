import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { LocalStoageHandlerService } from 'src/app/services/local-stoage-handler.service';

import { BlogModel } from 'src/app/models/blog.model';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  @Input() blog = new BlogModel;
  //blogsArticlesArr: any;

  noImgPath: string = "../../assets/no-img.jpg"
  constructor(private blogDataService: BlogDataService,
    private localStorageHandler: LocalStoageHandlerService,
    private router: Router) { }

  ngOnInit(): void {

  }


}
