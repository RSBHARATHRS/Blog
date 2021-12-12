import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStoageHandlerService } from 'src/app/services/local-stoage-handler.service';

@Component({
  selector: 'app-blog-add-form',
  templateUrl: './blog-add-form.component.html',
  styleUrls: ['./blog-add-form.component.css']
})
export class BlogAddFormComponent implements OnInit {

  myForm = new FormGroup({
    'title': new FormControl('', Validators.required),
    'author': new FormControl("", [Validators.required]),
    'description': new FormControl("", [Validators.required]),
    'content': new FormControl("", [Validators.required]),
    'imgUrl': new FormControl("", [Validators.required]),
  });

  blogModelObj: any;
  constructor(private localStorageService: LocalStoageHandlerService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup): void {

    this.blogModelObj = {
      title: form.value.title,
      author: form.value.author,
      description: form.value.description,
      content: form.value.content,
      urlToImage: form.value.imgUrl,
    }
    this.localStorageService.addBlog(this.blogModelObj);

  }

  resetForm() {
    this.myForm.reset();
  }

}
