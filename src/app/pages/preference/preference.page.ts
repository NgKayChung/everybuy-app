import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-preference',
  templateUrl: 'preference.page.html',
  styleUrls: ['preference.page.scss'],
})
export class PreferencePage {
  public is_guest_bl: boolean;

  constructor(private auth: AuthService, private profileService: ProfileService) {}

  ionViewWillEnter() {
    this.auth.isGuest()
      .then((isGuest_bl: boolean) => {
        this.is_guest_bl = isGuest_bl;
        if(isGuest_bl == true) {
          document.getElementById("username-title").innerHTML = "Hi, Guest!";
        }
        else {
          this.profileService.getUserProfile()
            .then((user_data) => {
              document.getElementById("username-title").innerHTML = "Hi, " + user_data["username_st"] + "!";
            })
            .catch((error) => {
              console.log(error);
              document.getElementById("username-title").innerHTML = "...";
            });
        }
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("username-title").innerHTML = "...";
      });
  }

  logout() {
    this.auth.logoutUser();
  }
}