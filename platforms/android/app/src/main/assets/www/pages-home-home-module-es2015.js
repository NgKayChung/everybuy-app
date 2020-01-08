(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Search by Product Name\" style=\"width: 90%; margin: auto;\" slot=\"start\" (ionChange)=\"onSearchChange($event)\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"filterProduct()\">\n        <ion-icon name=\"funnel\"></ion-icon>\n        <label>Filter</label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ng-template [ngIf]=\"products && products.length > 0\" [ngIfElse]=\"noProduct\">\n    <!-- <ion-virtual-scroll [items]=\"products\" approxItemHeight=\"320px\">\n      <ion-item class=\"item-thumbnail-left\" *virtualItem=\"let product;\" [routerLink]=\"['/product-details/' + product.product_id]\">\n        <ion-img class=\"image\" [src]=\"product.thumbnail_image_st\"></ion-img>\n        <div class=\"item-info\">\n          <p class=\"prod-name\">\n            {{product.product_name_st}}\n          </p>\n          <p class=\"price\">\n            RM {{product.product_price_nm.toFixed(2)}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-virtual-scroll> -->\n    <ion-list>\n      <ion-item *ngFor=\"let product of products\" class=\"item-thumbnail-left\" [routerLink]=\"['/product-details/' + product.product_id]\">\n        <ion-img class=\"image\" [src]=\"product.thumbnail_image_st\"></ion-img>\n        <div class=\"item-info\">\n          <p class=\"prod-name\">\n            {{product.product_name_st}}\n          </p>\n          <p class=\"price\">\n            RM {{product.product_price_nm.toFixed(2)}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n  <ng-template #noProduct>\n    <p style=\"padding: 0px 10px;\">No product found</p>\n  </ng-template>\n</ion-content>\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabs/tabs.component.module */ "./src/app/components/tabs/tabs.component.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ]),
            _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Product */\n.price {\n  font-size: 16px;\n  font-weight: 500;\n  color: #025296;\n}\n.prod-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.image {\n  width: 30%;\n  height: 16vh;\n  margin-right: 0.5rem;\n  padding: 0.5rem;\n}\n.item-info {\n  width: 70%;\n}\nion-searchbar {\n  --placeholder-opacity: .7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGxcXERvY3VtZW50c1xcTW9iaWxlIFRlY2hub2xvZ3kgUHJvamVjdFxcRXZlcnlCdXkvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FBQ0E7RUFDQyxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREVBO0VBQ0MsVUFBQTtFQUNDLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDRjtBREVBO0VBQ0UsVUFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2R1Y3QgKi9cbi5wcmljZXtcblx0Zm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAyNTI5Njtcbn1cblxuLnByb2QtbmFtZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uaW1hZ2Uge1xuXHR3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDE2dmg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pdGVtLWluZm8ge1xuICB3aWR0aDogNzAlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuNztcbn0iLCIvKiBQcm9kdWN0ICovXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDI1Mjk2O1xufVxuXG4ucHJvZC1uYW1lIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTZ2aDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLml0ZW0taW5mbyB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC43O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _modals_filter_product_modal_filter_product_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modals/filter-product-modal/filter-product-modal.page */ "./src/app/modals/filter-product-modal/filter-product-modal.page.ts");






let HomePage = class HomePage {
    constructor(modalController, authService, productService) {
        this.modalController = modalController;
        this.authService = authService;
        this.productService = productService;
    }
    ionViewWillEnter() {
        this.products = {};
        this.retrieveProducts();
    }
    onSearchChange(e) {
        let value = e.detail.value;
        if (value == '') {
            this.retrieveProducts();
            return;
        }
        this.productService.searchProduct(value)
            .then((productsData) => {
            this.products = productsData;
        })
            .catch((error) => {
            this.products = {};
        });
    }
    retrieveProducts() {
        this.productService.load()
            .then((productsData) => {
            this.products = productsData;
        })
            .catch((error) => {
            console.log(error);
        });
    }
    filterProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_filter_product_modal_filter_product_modal_page__WEBPACK_IMPORTED_MODULE_5__["FilterProductModalPage"],
            });
            modal.onDidDismiss()
                .then((products_data) => {
                if (products_data.data.filteredProducts) {
                    this.products = products_data.data.filteredProducts;
                }
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]],
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map