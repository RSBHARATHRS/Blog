import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { ProfileFormComponent } from './profile-form/profile-form.component';


const routes: Routes = [
  {
    path: "",
    component: ProfileDetailsComponent
  },
  {
    path: ":profile-mode",
    component: ProfileFormComponent
  }
  // {
  //   path: "update",
  //   component: ProfileFormComponent
  // },
  // {
  //   path: "create-profile",
  //   component: ProfileFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
