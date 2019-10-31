import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NFCPage } from './nfc.page';
import { TabsModule } from '../../components/tabs/tabs.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: NFCPage
      }
    ]),
    TabsModule
  ],
  declarations: [NFCPage]
})
export class NFCPageModule {}
