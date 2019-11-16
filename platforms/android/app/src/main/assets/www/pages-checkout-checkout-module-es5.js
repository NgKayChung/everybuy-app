(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ng-template [ngIf]=\"productInfo\">\n      <ion-buttons>\n        <ion-back-button color=\"secondary\" [defaultHref]=\"'/product-details/' + productInfo.product_id\"></ion-back-button>\n        <ion-title>Checkout</ion-title>\n      </ion-buttons>\n    </ng-template>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-template [ngIf]=\"productInfo\">\n    <ion-card>\n      <ion-item class=\"item-thumbnail-left\" lines=\"none\">\n        <ion-img class=\"image\" [src]=\"productInfo.thumbnail_image_st\"></ion-img>\n        <div class=\"item-info\">\n          <p class=\"prod-name\">\n            {{productInfo.product_name_st}}\n          </p>\n          <label class=\"price\">\n            RM {{productInfo.product_price_nm.toFixed(2)}}\n          </label>\n          <label>x1</label>\n        </div>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <ion-icon name=\"pin\" color=\"secondary\"></ion-icon>\n          <label style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif; margin-left: 3px;\">Delivery Address</label>\n        </ion-item>\n        <ng-template [ngIf]=\"selectedDeliveryAddress\" [ngIfElse]=\"noDeliveryAddress\">\n          <ion-item lines=\"full\" detail=true (click)=\"presentDeliveryModal(selectedDeliveryAddress.delivery_id)\">\n            <ion-label class=\"ion-text-wrap\" style=\"color: #4E4E4E; font-family: sans-serif;\">\n              <ion-text>{{selectedDeliveryAddress.rec_name_st}}</ion-text>\n              <br/>\n              <label>{{selectedDeliveryAddress.rec_phone_st}}</label>\n              <br/>\n              <ion-text>\n                <label>{{selectedDeliveryAddress.address1_st + \", \" + (selectedDeliveryAddress.address2_st == null ? \"\" : selectedDeliveryAddress.address2_st + \", \") + selectedDeliveryAddress.zipcode_st + \" \" + selectedDeliveryAddress.state_st}}</label>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </ng-template>\n        <ng-template #noDeliveryAddress>\n          <ion-item lines=\"full\" detail=true (click)=\"presentDeliveryModal()\">\n            <ion-label>Choose your delivery address</ion-label>\n          </ion-item>\n        </ng-template>\n      </ion-item-group>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <ion-icon src=\"/assets/shipping-icon.svg\" color=\"secondary\"></ion-icon>\n          <label style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif; margin-left: 3px;\">Shipping Option</label>\n        </ion-item>\n        <ng-template [ngIf]=\"selectedShippingOption\">\n          <ion-item lines=\"full\" detail=true style=\"color: #4E4E4E; font-family: sans-serif;\" (click)=\"presentShippingOptionsModal(selectedShippingOption.shipping_id)\">\n            <ion-label>\n              <label>{{selectedShippingOption.courier_name_st}}</label>\n              <label style=\"position: absolute; left: 50%;\">RM {{selectedShippingOption.courier_charge_nm.toFixed(2)}}</label>\n            </ion-label>\n          </ion-item>\n        </ng-template>\n      </ion-item-group>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <ion-icon name=\"card\" color=\"secondary\"></ion-icon>\n          <label style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif; margin-left: 3px;\">Payment Option</label>\n        </ion-item>\n        <ion-item lines=\"full\" style=\"color: #4E4E4E; font-family: sans-serif;\">\n          <ion-label>Credit/Debit Card</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"none\">\n          <ion-label>Item Subtotal</ion-label>\n          <ion-label>RM {{productInfo.product_price_nm.toFixed(2)}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>Shipping Subtotal</ion-label>\n          <ng-template [ngIf]=\"selectedShippingOption\" [ngIfElse]=\"shippingsubload\">\n            <ion-label>RM {{selectedShippingOption.courier_charge_nm.toFixed(2)}}</ion-label>\n          </ng-template>\n          <ng-template #shippingsubload>\n            <ion-label>RM 0.00</ion-label>\n          </ng-template>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"total-title\">Total Payment</ion-label>\n          <ng-template [ngIf]=\"selectedShippingOption\" [ngIfElse]=\"totalpaymentload\">\n            <ion-label class=\"total-price\">RM {{(productInfo.product_price_nm + selectedShippingOption.courier_charge_nm).toFixed(2)}}</ion-label>\n          </ng-template>\n          <ng-template #totalpaymentload>\n            <ion-label class=\"total-price\">RM 0.00</ion-label>\n          </ng-template>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n  </ng-template>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"placeOrder()\">\n    <ion-label>Place Order</ion-label>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/pages/checkout/checkout.page.ts");







var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F1F1F1;\n}\n\nion-card:first-of-type {\n  margin: 0px;\n  padding: 10px 0px;\n}\n\nion-card {\n  margin: 10px 0px;\n  background-color: white;\n}\n\n.image {\n  width: 30%;\n  height: auto;\n  margin-right: 0.5rem;\n  padding: 0.5rem;\n}\n\n.item-info {\n  width: 70%;\n}\n\n.prod-name {\n  margin-top: 0px;\n  font-size: large;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.price {\n  font-size: large;\n  margin-right: 60px;\n  font-weight: 500;\n  color: #025296;\n}\n\n.total-title {\n  font-size: larger;\n}\n\n.total-price {\n  font-size: larger;\n  color: #025296;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvQzpcXFVzZXJzXFxsXFxEb2N1bWVudHNcXE1vYmlsZSBUZWNobm9sb2d5IFByb2plY3RcXEV2ZXJ5QnV5L3NyY1xcYXBwXFxwYWdlc1xcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0MsVUFBQTtFQUNHLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YxRjFGMTtcclxufVxyXG5cclxuaW9uLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcblx0d2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uaXRlbS1pbmZvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wcm9kLW5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLnByaWNle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAyNTI5NjtcclxufVxyXG5cclxuLnRvdGFsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4udG90YWwtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBjb2xvcjogIzAyNTI5NjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjFGMUYxO1xufVxuXG5pb24tY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pdGVtLWluZm8ge1xuICB3aWR0aDogNzAlO1xufVxuXG4ucHJvZC1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAyNTI5Njtcbn1cblxuLnRvdGFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogIzAyNTI5Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _modals_delivery_modal_delivery_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals/delivery-modal/delivery-modal.page */ "./src/app/modals/delivery-modal/delivery-modal.page.ts");
/* harmony import */ var _modals_shipping_modal_shipping_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/shipping-modal/shipping-modal.page */ "./src/app/modals/shipping-modal/shipping-modal.page.ts");








var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(activatedRoute, navCtrl, modalController, productService, orderService) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.productService = productService;
        this.orderService = orderService;
    }
    CheckoutPage.prototype.ngOnInit = function () {
    };
    CheckoutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var product_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.productService.getProductDetails(product_id)
            .then(function (product_details) {
            _this.productInfo = product_details;
        })
            .catch(function (error) {
            console.log(error);
        });
        this.orderService.getUserLastOrder(1)
            .then(function (delivery_address) {
            _this.selectedDeliveryAddress = delivery_address[0];
        })
            .catch(function (error) {
            console.log(error);
        });
        this.orderService.getShippingOptions()
            .then(function (shipping_options) {
            _this.selectedShippingOption = shipping_options[0];
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CheckoutPage.prototype.presentDeliveryModal = function (deliveryId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modals_delivery_modal_delivery_modal_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryModalPage"],
                            componentProps: {
                                selected: deliveryId
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (modalResponse) {
                            _this.orderService.getDeliveryAddresses(modalResponse.data.selectedDelivery)
                                .then(function (delivery_address) {
                                _this.selectedDeliveryAddress = delivery_address[0];
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutPage.prototype.presentShippingOptionsModal = function (shipOptId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modals_shipping_modal_shipping_modal_page__WEBPACK_IMPORTED_MODULE_7__["ShippingModalPage"],
                            componentProps: {
                                selected: shipOptId
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (modalResponse) {
                            _this.orderService.getShippingOptions(modalResponse.data.selectedShipping)
                                .then(function (shippingOption) {
                                _this.selectedShippingOption = shippingOption[0];
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this = this;
        this.orderService.createOrder(this.productInfo.product_id, this.selectedDeliveryAddress.delivery_id, this.selectedShippingOption.shipping_id)
            .then(function (response_orderId) {
            _this.navCtrl.navigateRoot("/payment");
            var navigationExtras = {
                queryParams: {
                    order_id: response_orderId
                }
            };
            _this.navCtrl.navigateForward('/payment', navigationExtras);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CheckoutPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
    ]; };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/pages/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module-es5.js.map