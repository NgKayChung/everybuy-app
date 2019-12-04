import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';

import { DeliveryModalPage } from '../../modals/delivery-modal/delivery-modal.page';
import { ShippingModalPage } from '../../modals/shipping-modal/shipping-modal.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public productInfo: any;
  public selectedDeliveryAddress: any;
  public selectedShippingOption: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalController: ModalController,
    private productService: ProductService,
    private orderService: OrderService
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
    
    this.orderService.getDeliveryAddresses()
      .then((delivery_address) => {
        if(delivery_address) {
          this.selectedDeliveryAddress = delivery_address[0];
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
    this.orderService.getShippingOptions()
      .then((shipping_options) => {
        if(shipping_options) {
          this.selectedShippingOption = shipping_options[0];
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async presentDeliveryModal(deliveryId) {
    const modal = await this.modalController.create({
      component: DeliveryModalPage,
      componentProps: {
        selected: deliveryId
     }
    });

    modal.onDidDismiss()
      .then((modalResponse) => {
        this.orderService.getDeliveryAddresses(modalResponse.data.selectedDelivery)
          .then((delivery_address) => {
            this.selectedDeliveryAddress = delivery_address[0];
          })
          .catch((error) => {
            console.log(error);
          });
      });
    return await modal.present();
  }

  async presentShippingOptionsModal(shipOptId) {
    const modal = await this.modalController.create({
      component: ShippingModalPage,
      componentProps: {
        selected: shipOptId
     }
    });

    modal.onDidDismiss()
      .then((modalResponse) => {
        this.orderService.getShippingOptions(modalResponse.data.selectedShipping)
          .then((shippingOption) => {
            this.selectedShippingOption = shippingOption[0];
          })
          .catch((error) => {
            console.log(error);
          });
      });
    return await modal.present();
  }

  placeOrder() {
    this.orderService.createOrder(this.productInfo.product_id, this.selectedDeliveryAddress.delivery_id, this.selectedShippingOption.shipping_id)
      .then((response_orderId) => {
        let navigationExtras: NavigationExtras = {
          queryParams: {
              order_id: response_orderId
          }
        };
        this.navCtrl.navigateForward('/payment', navigationExtras);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}