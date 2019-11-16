import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, LoadingController, IonHeader } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';

import Swal from 'sweetalert2';

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
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public productInfo: any;
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild(IonHeader, null) myHeader: IonHeader;

  constructor(
    private navCtrl: NavController,
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let product_id = params.get('id');
      this.productService.getProductDetails(product_id)
        .then((product_details) => {
          this.productInfo = product_details;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  getImages() {
    return (this.productInfo.image_urls_st ? this.productInfo.image_urls_st.split(',') : ["http://my-test-11.slatic.net/p/132ce03862f288b8d1eec9e3d8b972aa.jpg_340x340q80.jpg"]);
  }

  getProductPrice() {
    return "Price: RM " + this.productInfo.product_price_nm.toFixed(2);
  }

  purchase() {
    this.auth.isGuest()
      .then(async (userIsGuest_bl) => {
        if(userIsGuest_bl == true) {
          Swal.fire({
            title: "Guest",
            html: "To purchase the item<br/>Kindly login to an account first",
            type: "info",
            showCancelButton: true,
            confirmButtonText: "Ok, Login Now",
            cancelButtonText: "Return"
          }).then((result) => {
            if(result.value) {
              this.auth.logoutUser();
            }
            else {
              console.log("User cancels purchase and login");
            }
          });
        }
        else {
          this.orderService.removeAnyExistingOrder();

          // sends parameters to purchase page
          let product_id = this.activatedRoute.snapshot.paramMap.get('id');
          this.navCtrl.navigateRoot("/checkout/" + product_id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  scrollScreen(e) {
    if(e.detail.scrollTop > 0) {
      this.myHeader["el"].classList.remove("atTop");
      this.myHeader["el"].classList.replace("scrolledTop", "scrolled");
    }
    else {
      this.myHeader["el"].classList.replace("scrolled", "scrolledTop");
      this.myHeader["el"].classList.add("atTop");
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}