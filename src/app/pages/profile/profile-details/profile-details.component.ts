import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  isLogedIn: boolean = false;
  profile = new Profile;
  hasAccount: boolean = false;
  logoImgPath = "/assets/IDP-logo.svg";
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.hasAccount = this.profileService.hasAccount();
    console.log("hass account:", this.hasAccount);
    if (this.hasAccount) {
      this.profile = this.profileService.getProfileDetailes();
    }

  }

}
