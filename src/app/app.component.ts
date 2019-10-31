import { Component, AfterViewInit } from '@angular/core';

import { Platform, NavController, ModalController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  ngAfterViewInit() {
    // handles hardware back button tapped
    var lastTimeBackPress = 0;
    var timePeriodToExit = 3000;
    document.addEventListener("backbutton", async (e) => {
      e.preventDefault();

      // first check if there is opened modal
      // get top modal
      let currentModal;
      await this.modalCtrl.getTop().then((topModal) => {
        currentModal = topModal;
      });
      
      // if yes, dismiss the modal
      if(currentModal != undefined) {
        this.modalCtrl.dismiss();
        return;
      }

      // get current active page
      let view = this.activatedRoute.snapshot.firstChild.routeConfig.path;
      if(view == "home" || view == "profile") {
        // Double check to exit app
        if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
          navigator['app'].exitApp(); // Exit app
        }
        else {
          let toast = await this.toastCtrl.create({
            message: 'Press back again to exit',
            duration: 3000,
            cssClass: "toast-style"
          });
          toast.present();
          lastTimeBackPress = new Date().getTime();
        }
      }
      else if(view == "login" || view == "register") {
        navigator['app'].exitApp(); // Exit app
      }
      else {
        // go to previous page
        this.navCtrl.back();
      }
    });

    this.auth.checkLoggedIn();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#00A0E4");
      this.splashScreen.hide();
    });
  }
}