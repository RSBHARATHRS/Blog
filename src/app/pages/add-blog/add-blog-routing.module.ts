import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog.component';

console.warn("AddBlogs Module Loaded");
const routes: Routes = [{ path: '', component: AddBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBlogRoutingModule { }
