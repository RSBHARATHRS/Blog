import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocalStoageHandlerService } from 'src/app/services/local-stoage-handler.service';
import { BlogModel } from 'src/app/models/blog.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit, OnDestroy {

  blogModel = new BlogModel();
  editBlogModel = new BlogModel();

  formMode: string;
  blogModelObj: any;
  editRequestedIndex: any = -1;
  isGoingToadd: boolean = true;

  constructor(private localStorageService: LocalStoageHandlerService,
    private activeRouter: ActivatedRoute,
    private router: Router) {
    this.formMode = 'addBlog';
  }

  myForm: any = FormGroup;

  ngOnInit() {
    this.formMode = this.activeRouter.snapshot.params['mode'];

    if (this.formMode != "edit" && this.formMode != "addBlog") {
      this.router.navigateByUrl("/error");
      return;
    }

    if (this.formMode == "edit") {

      //console.log("retrive obj:", this.activeRouter.snapshot.params['obj'] || [])
      this.editRequestedIndex = JSON.parse(this.activeRouter.snapshot.params['id']);
      console.log("Edit index:", this.editRequestedIndex)
      //this.editBlogModel = JSON.parse(this.activeRouter.snapshot.params['obj']);
      this.editBlogModel = this.localStorageService.getSpecificBlog(this.editRequestedIndex);
      console.log("Edit Index:", this.editRequestedIndex)
      this.isGoingToadd = false;
    }

    this.myForm = new FormGroup({
      'title': new FormControl(this.editBlogModel.title, Validators.required),
      'author': new FormControl(this.editBlogModel.author, [Validators.required, Validators.minLength(3)]),
      'description': new FormControl(this.editBlogModel.description, [Validators.required, Validators.minLength(15)]),
      'content': new FormControl(this.editBlogModel.content, [Validators.required, Validators.minLength(15)]),
      'imgUrl': new FormControl(this.editBlogModel.urlToImage),
    });
  }

  onSubmit(form: FormGroup): void {

    this.blogModel.title = form.value.title;
    this.blogModel.author = form.value.author;
    this.blogModel.description = form.value.description;
    this.blogModel.content = form.value.content;
    this.blogModel.urlToImage = form.value.imgUrl;
    this.blogModel.url = this.editBlogModel.url;

    if (this.formMode != "edit") {
      this.blogModel.url = '/blog/blog-' + this.localStorageService.getNewIndex();
      this.localStorageService.addBlog(this.blogModel);
    } else {
      this.localStorageService.updateSpecificBlogArr(this.editRequestedIndex, this.blogModel);
    }

    this.resetForm();
  }

  resetForm() {
    this.myForm.reset();
  }

  ngOnDestroy(): void {
    this.editRequestedIndex = 0;
    this.localStorageService.editRequest = -1;
    this.formMode = 'addBlog';
  }
}
