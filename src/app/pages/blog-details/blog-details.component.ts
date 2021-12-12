import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStoageHandlerService } from 'src/app/services/local-stoage-handler.service';
import { Location } from '@angular/common'
import { blogDataType, BlogModel } from 'src/app/models/blog.model';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  formBottom: any;
  id: any;
  blog = new BlogModel;
  index: number;
  //blog: any;
  noImgPath: string = "../../assets/no-img.jpg"
  constructor(private location: Location,
    private activeRoute: ActivatedRoute,
    private localStorageHandler: LocalStoageHandlerService,
    private router: Router) {
    this.index = 0;
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']; //ex: blog-1
    //console.log("Received ID:", Number(this.id.split('-')[1])); // blog '-' 1
    //this.blog = JSON.parse(this.activeRoute.snapshot.params['obj']);
    //this.blog = this.id;
    this.index = Number(this.id.split('-')[1]);
    console.log("index:", this.index);
    this.blog = this.localStorageHandler.getSpecificBlog(this.index);
  }

  editBlog() {
    this.localStorageHandler.requestToEdit(this.id);
    //this.router.navigateByUrl('addBlog');
    this.edit(this.index)
  }

  deleteBlog() {
    this.localStorageHandler.deleteBlog(this.id);
    this.location.back();
  }

  edit(index: any) {
    console.log("read more")
    //this.router.navigate(['blog', this.id, 'edit', { id: index, obj: JSON.stringify(Obj) }]);
    this.router.navigate(['blog', index, 'edit']);
  }
}
