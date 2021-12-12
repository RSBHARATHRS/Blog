import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAddFormComponent } from './blog-add-form/blog-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleBlogComponent } from './single-blog/single-blog.component'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    BlogAddFormComponent,
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BlogAddFormComponent,
    SingleBlogComponent
  ]
})
export class ComponentsModule { }
