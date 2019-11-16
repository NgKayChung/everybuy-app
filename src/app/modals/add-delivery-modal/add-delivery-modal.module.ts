import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddDeliveryModalPage } from './add-delivery-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeliveryModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddDeliveryModalPage]
})
export class AddDeliveryModalPageModule {}
