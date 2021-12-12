import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  myProfileForm: any;
  profile = new Profile;
  formMode: any;

  constructor(private profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.formMode = this.activeRouter.snapshot.params['profile-mode'];

    if (this.formMode == 'update') {
      this.profile = this.profileService.getProfileDetailes();
    }

    this.myProfileForm = this.fb.group({
      'firstName': new FormControl(this.profile.firstName, [Validators.required, Validators.pattern("[a-zA-Z][a-z]*")]),
      'lastName': new FormControl(this.profile.lastName, [Validators.required, Validators.pattern("[a-zA-z]*")]),
      'email': new FormControl(this.profile.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      'mobileNo': new FormControl(this.profile.mobileNo, [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
      'DOB': new FormControl(this.profile.DOB, [Validators.required]),
      'address': new FormControl(this.profile.address, [Validators.required]),
      'country': new FormControl(this.profile.country, [Validators.required]),
      'selfInfo': new FormControl(this.profile.selfInfo, [Validators.required, Validators.minLength(15)]),
    });
  }

  onSubmit(form: any) {

    this.profile.firstName = form.value.firstName;
    this.profile.lastName = form.value.lastName;
    this.profile.email = form.value.email;
    this.profile.mobileNo = form.value.mobileNo;
    this.profile.DOB = form.value.DOB;
    this.profile.address = form.value.address;
    this.profile.country = form.value.country;
    this.profile.selfInfo = form.value.selfInfo;

    console.log(this.profile);
    this.profileService.storeProfileDetails(this.profile);

    //this.resetForm();
    this.router.navigateByUrl("/profile");
  }

  resetForm() {
    this.profile = new Profile;
    //this.myProfileForm.reset(this.myProfileForm.value);

  }

  // onFileUpload(event: any) {
  //   console.log(event);
  //   const file = event.target.files[0];
  //   console.log(file);
  //   this.postFile(file);
  // }

  // postFile(fileToUpload: File) {
  //   const endpoint = 'D:\Angular Projects\IDP-Blog\src\assets';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   // return this.httpClient
  //   //   .post(endpoint, formData, { headers: yourHeadersConfig })
  //   //   .map(() => { return true; })
  //   //   .catch((e) => this.handleError(e));
  // }

}


