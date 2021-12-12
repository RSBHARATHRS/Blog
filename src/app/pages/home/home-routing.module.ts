import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

import { HomeComponent } from './home.component';

console.warn("Home Module Loaded");
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "blog/:id/:mode",
    component: AddBlogComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
