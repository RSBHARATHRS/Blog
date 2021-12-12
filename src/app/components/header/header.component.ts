import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoImgPath: string;
  profile = new Profile();

  constructor(private profileService: ProfileService) {
    this.logoImgPath = "/assets/IDP-logo.svg";
  }


  ngOnInit(): void {
    this.profile = this.profileService.getProfileDetailes();
  }

}
