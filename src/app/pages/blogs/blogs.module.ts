import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ReversePipe } from './../../pipes/reverse.pipe';
import { ComponentsModule } from 'src/app/components/components.module';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogsComponent,
    ReversePipe,

  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ComponentsModule
  ],

})
export class BlogsModule { }
