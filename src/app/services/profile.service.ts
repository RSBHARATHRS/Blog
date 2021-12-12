import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  profile = new Profile;
  localStorageKey = 'profileInfo';


  constructor() { }

  storeProfileDetails(info: Profile) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(info));
  }

  hasAccount(): boolean {
    if (localStorage.getItem(this.localStorageKey)) {
      return true;
    }
    return false;
  }

  getProfileDetailes() {
    this.profile = JSON.parse(localStorage.getItem(this.localStorageKey) || '');
    return this.profile;
  }
}
