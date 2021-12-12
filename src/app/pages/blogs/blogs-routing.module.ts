import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { BlogsComponent } from './blogs.component';


console.warn("Blogs Module Loaded");
const routes: Routes = [
  {
    path: "",
    component: BlogsComponent
  },
  {
    path: ":id",
    component: BlogDetailsComponent
  },
  // {
  //   path: "blog",
  //   component: BlogsComponent,
  //   children: [
  //     {
  //       path: ":id",
  //       component: BlogDetailsComponent,

  //     }
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
