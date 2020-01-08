import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, IonHeader } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
  }

  /**
   * Retrieves product details from product ID
   * Calls ProductService.getProductDetails
   */
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
    return (this.productInfo.image_urls_st ? this.productInfo.image_urls_st.split(',') : ["https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg"]);
  }

  getProductPrice() {
    return "Price: RM " + this.productInfo.product_price_nm.toFixed(2);
  }

  /**
   * Executes when Purchase button is tapped
   * First check is the user logged in as Guest
   * if yes
   *    Popup message to inform user to login to purchase
   * else
   *    Remove any existing order in for the user(Make Fail)
   *    Proceed to checkout page
   */
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

  /**
   * Executes when the screen is scrolled
   * To make change in the opacity of the header bar
   */
  scrollScreen(e) {
    // if current scrolling position is not at top
    if(e.detail.scrollTop > 0) {
      // lower header bar opacity and styles
      this.myHeader["el"].classList.remove("atTop");
      this.myHeader["el"].classList.replace("scrolledTop", "scrolled");
    }
    else {
      // fixed header bar position at top and styles
      this.myHeader["el"].classList.replace("scrolled", "scrolledTop");
      this.myHeader["el"].classList.add("atTop");
    }
  }
}