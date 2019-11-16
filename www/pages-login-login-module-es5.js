(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back-image\"></div>\n<ion-content class=\"ion-padding\">\n  <ion-grid style=\"height: 100%;\">\n    <ion-row style=\"height: 100%;\">\n      <ion-col class=\"ion-align-self-end\">\n        <div class=\"login-menu\">\n          <p [routerLink]=\"['/register']\" style=\"text-align: center; font-size: medium; color: #02245f;\">>> Not a member? Sign Up here <<</p>\n          <ion-title style=\"margin: 20px 10px; text-align: center;\">Login to EveryBuy</ion-title>\n          <ion-item style=\"margin: 30px 0px 8px;\">\n            <ion-label position=\"floating\">Username / Email / Phone Number</ion-label>\n            <ion-input [(ngModel)]=\"username_st\"></ion-input>\n          </ion-item>\n          <ion-item style=\"margin: 8px 0px;\">\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input [(ngModel)]=\"password_st\" type=\"password\"></ion-input>\n          </ion-item>\n          <ion-button style=\"margin: 30px 0px;\" expand=\"full\" (click)=\"login()\">\n            Login\n          </ion-button>\n          <p style=\"text-align: center; font-size: small; color: #002d7b;\" (click)=\"guestLogin()\">Continue as Guest</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-image {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-image: url(\"https://fsb.zobj.net/crop.php?r=rex_0tP1HKR2pY1c6ermySVJgruM1bi_LkZAfVPkmiEP00g7kiD-rcfUhfKUq5xOdmq3zqpcMmaO0xx9F3JeUQ2F7YrruIm5iiPZMejq5xs7mlYhKuwC_46ESFcBMJTQArQsHRN8w2AZcewoS0giRCFCrkc-o6dGhC-YoF_NILLvXNBhOX9d98OimH14FRLga9PjHCrWMyYqrx-9\");\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(10px);\n  -moz-filter: blur(10px);\n  -o-filter: blur(10px);\n  -ms-filter: blur(10px);\n  filter: blur(10px);\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\nion-content {\n  --background: none;\n}\n\n.login-menu {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 10px;\n  border-radius: 3px;\n}\n\n.login-menu ion-item {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxsXFxEb2N1bWVudHNcXE1vYmlsZSBUZWNobm9sb2d5IFByb2plY3RcXEV2ZXJ5QnV5L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseVFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZnNiLnpvYmoubmV0L2Nyb3AucGhwP3I9cmV4XzB0UDFIS1IycFkxYzZlcm15U1ZKZ3J1TTFiaV9Ma1pBZlZQa21pRVAwMGc3a2lELXJjZlVoZktVcTV4T2RtcTN6cXBjTW1hTzB4eDlGM0plVVEyRjdZcnJ1SW01aWlQWk1lanE1eHM3bWxZaEt1d0NfNDZFU0ZjQk1KVFFBclFzSFJOOHcyQVpjZXdvUzBnaVJDRkNya2MtbzZkR2hDLVlvRl9OSUxMdlhOQmhPWDlkOThPaW1IMTRGUkxnYTlQakhDcldNeVlxcngtOScpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIC1tb3otZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLW8tZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLW1zLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ubG9naW4tbWVudSBpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iLCIuYmFjay1pbWFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZnNiLnpvYmoubmV0L2Nyb3AucGhwP3I9cmV4XzB0UDFIS1IycFkxYzZlcm15U1ZKZ3J1TTFiaV9Ma1pBZlZQa21pRVAwMGc3a2lELXJjZlVoZktVcTV4T2RtcTN6cXBjTW1hTzB4eDlGM0plVVEyRjdZcnJ1SW01aWlQWk1lanE1eHM3bWxZaEt1d0NfNDZFU0ZjQk1KVFFBclFzSFJOOHcyQVpjZXdvUzBnaVJDRkNya2MtbzZkR2hDLVlvRl9OSUxMdlhOQmhPWDlkOThPaW1IMTRGUkxnYTlQakhDcldNeVlxcngtOVwiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtby1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC1tcy1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxvZ2luLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmxvZ2luLW1lbnUgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage, auth) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.auth = auth;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.username_st = "";
        this.password_st = "";
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.username_st, this.password_st)
            .then(function (responseData) {
            _this.storage.set('uid', responseData["uid"]);
            _this.storage.set('isguest', false);
            _this.navCtrl.navigateRoot("/home");
        })
            .catch(function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: "Error",
                text: error,
                type: "error",
                confirmButtonText: "Dismiss",
                confirmButtonColor: "#b1b1b1"
            });
        });
    };
    LoginPage.prototype.guestLogin = function () {
        var _this = this;
        this.auth.loginGuest()
            .then(function (responseData) {
            _this.storage.set('uid', responseData["uid"]);
            _this.storage.set('isguest', true);
            _this.navCtrl.navigateRoot("/home");
        })
            .catch(function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: "Error",
                text: error,
                type: "error",
                confirmButtonText: "Dismiss",
                confirmButtonColor: "#b1b1b1"
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map