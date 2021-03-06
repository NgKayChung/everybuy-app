import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PreferencePage } from './preference.page';
import { TabsModule } from '../../components/tabs/tabs.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PreferencePage
      }
    ]),
    TabsModule
  ],
  declarations: [PreferencePage]
})
export class PreferencePageModule {}
