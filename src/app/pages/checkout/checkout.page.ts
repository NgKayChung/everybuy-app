import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

import { ProductService } from '../../services/product.service';

import { DeliveryModalPage } from '../../modals/delivery-modal/delivery-modal.page';

export interface PRODUCT_DETAILS {
  product_id: string;
  product_name_st: string;
  product_desc_st: string;
  product_cat_st: string;
  product_subcat_st: string;
  product_price_nm: number;
  product_stock_nm: number;
  image_urls_st: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public productInfo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalController: ModalController,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let product_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductDetails(product_id)
      .then((product_details) => {
        this.productInfo = product_details;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async presentDeliveryModal() {
    const modal = await this.modalController.create({
      component: DeliveryModalPage
    });
    return await modal.present();
  }
}