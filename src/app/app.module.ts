import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NFC } from '@ionic-native/nfc/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TabsModule } from './components/tabs/tabs.component.module';
import { DeliveryModalPageModule } from './modals/delivery-modal/delivery-modal.module';
import { AddDeliveryModalPageModule } from './modals/add-delivery-modal/add-delivery-modal.module';
import { ShippingModalPageModule } from './modals/shipping-modal/shipping-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__everybuydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule,
    TabsModule,
    DeliveryModalPageModule,
    AddDeliveryModalPageModule,
    ShippingModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NFC,
    Stripe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}