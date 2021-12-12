import { Injectable } from '@angular/core';
import { BlogDataService } from './blog-data.service';

import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStoageHandlerService {

  blogsFromApi: any;
  blogs: any;
  blogsArr: any;
  reverseBlogsArr: any;
  editRequest: number = -1;
  constructor(private blogDataService: BlogDataService) {

    this.blogs = localStorage.getItem("blogs");
    if (!this.blogs) {
      this.getInitialBlogsFromServer();
    }
    this.retriveFromLocalStorage();
  }

  getInitialBlogsFromServer() {
    this.blogDataService.getAllBlogs().subscribe(data => {
      this.blogsFromApi = data.articles;
      localStorage.setItem("blogs", JSON.stringify(this.blogsFromApi));
      this.retriveFromLocalStorage()
    });
  }

  retriveFromLocalStorage() {
    this.blogsArr = JSON.parse(localStorage.getItem("blogs") || "[]");
    this.reverseBlogsArr = this.blogsArr.slice().reverse();
  }

  getAllBlogs() {
    return this.reverseBlogsArr;
  }

  getSpecificBlog(index: number) {
    return this.blogsArr[index];
  }

  addBlog(blog: BlogModel) {
    this.blogsArr.push(blog);
    this.updateLocalStorage();
  }

  updateSpecificBlogArr(index: any, data: any) {
    this.blogsArr[index] = data;
    //this.blogsArr = this.reverseBlogsArr.slice().reverse();
    this.updateLocalStorage();
  }

  requestToEdit(index: any) {
    this.editRequest = index;
  }
  /*****Delete Specific blog in the service array*****/
  deleteBlog(index: number) {
    this.reverseBlogsArr.splice(index, 1);
    this.blogsArr = this.reverseBlogsArr.slice().reverse();
    this.updateLocalStorage();
  }

  /*****What ever changes made in service local array update in local storage too*****/
  updateLocalStorage() {
    localStorage.setItem("blogs", JSON.stringify(this.blogsArr));
    this.reverseBlogsArr = this.blogsArr.slice().reverse();
  }

  getNewIndex() {
    return this.reverseBlogsArr.length;
  }
}
