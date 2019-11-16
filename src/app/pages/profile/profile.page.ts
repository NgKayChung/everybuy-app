import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor(private auth: AuthService) {}

  ionViewWillEnter() {
    this.auth.isGuest()
      .then((isGuest_bl) => {
        if(isGuest_bl == true) {
          document.getElementById("username-title").innerHTML = "Guest";
        }
        else {
          this.auth.getUsername()
            .then((username_st) => {
              document.getElementById("username-title").innerHTML = username_st;
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