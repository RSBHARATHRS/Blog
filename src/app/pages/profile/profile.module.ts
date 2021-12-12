import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProfileDetailsComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
