(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back-image\"></div>\n<ion-content class=\"ion-padding\">\n  <div class=\"register-menu\">\n    <p [routerLink]=\"['/login']\" style=\"text-align: center; font-size: medium; color: #02245f; margin: 5px;\">>> Already have an account? Login here <<</p>\n    <ion-title style=\"margin: 15px 10px; text-align: center;\">Account Registration</ion-title>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input [(ngModel)]=\"newUsername_st\" placeholder=\"eg. john1234\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"floating\">Surname</ion-label>\n      <ion-input [(ngModel)]=\"newFirstname_st\" placeholder=\"eg. John\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"floating\">Given Name</ion-label>\n      <ion-input [(ngModel)]=\"newLastname_st\" placeholder=\"eg. Appleseed\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"floating\">Email Address</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"newEmail_st\" placeholder=\"eg. john.appleseed@gmail.com\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"newPhoneNumber_st\" placeholder=\"eg. 0123456789\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"stacked\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"newPassword_st\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-label position=\"stacked\">Confirm Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"confirmPassword_st\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin: 8px 0px;\">\n      <ion-checkbox [(ngModel)]=\"tncChecked_bl\"></ion-checkbox>\n      <ion-label style=\"margin-left: 10px; color: #002d7b; font-size: small;\">I agree to the Terms and Conditions</ion-label>\n    </ion-item>\n    <ion-button style=\"margin: 15px 0px;\" expand=\"full\" (click)=\"register()\">\n      Register\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-image {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-image: url(\"https://fsb.zobj.net/crop.php?r=rex_0tP1HKR2pY1c6ermySVJgruM1bi_LkZAfVPkmiEP00g7kiD-rcfUhfKUq5xOdmq3zqpcMmaO0xx9F3JeUQ2F7YrruIm5iiPZMejq5xs7mlYhKuwC_46ESFcBMJTQArQsHRN8w2AZcewoS0giRCFCrkc-o6dGhC-YoF_NILLvXNBhOX9d98OimH14FRLga9PjHCrWMyYqrx-9\");\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(10px);\n  -moz-filter: blur(10px);\n  -o-filter: blur(10px);\n  -ms-filter: blur(10px);\n  filter: blur(10px);\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\nion-content {\n  --background: none;\n}\n\n.register-menu {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 10px;\n  height: 100%;\n  border-radius: 3px;\n  overflow-y: scroll;\n}\n\n.register-menu ion-item {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxsXFxEb2N1bWVudHNcXE1vYmlsZSBUZWNobm9sb2d5IFByb2plY3RcXEV2ZXJ5QnV5L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseVFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZnNiLnpvYmoubmV0L2Nyb3AucGhwP3I9cmV4XzB0UDFIS1IycFkxYzZlcm15U1ZKZ3J1TTFiaV9Ma1pBZlZQa21pRVAwMGc3a2lELXJjZlVoZktVcTV4T2RtcTN6cXBjTW1hTzB4eDlGM0plVVEyRjdZcnJ1SW01aWlQWk1lanE1eHM3bWxZaEt1d0NfNDZFU0ZjQk1KVFFBclFzSFJOOHcyQVpjZXdvUzBnaVJDRkNya2MtbzZkR2hDLVlvRl9OSUxMdlhOQmhPWDlkOThPaW1IMTRGUkxnYTlQakhDcldNeVlxcngtOScpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIC1tb3otZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLW8tZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLW1zLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbWVudSBpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iLCIuYmFjay1pbWFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZnNiLnpvYmoubmV0L2Nyb3AucGhwP3I9cmV4XzB0UDFIS1IycFkxYzZlcm15U1ZKZ3J1TTFiaV9Ma1pBZlZQa21pRVAwMGc3a2lELXJjZlVoZktVcTV4T2RtcTN6cXBjTW1hTzB4eDlGM0plVVEyRjdZcnJ1SW01aWlQWk1lanE1eHM3bWxZaEt1d0NfNDZFU0ZjQk1KVFFBclFzSFJOOHcyQVpjZXdvUzBnaVJDRkNya2MtbzZkR2hDLVlvRl9OSUxMdlhOQmhPWDlkOThPaW1IMTRGUkxnYTlQakhDcldNeVlxcngtOVwiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtby1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC1tcy1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnJlZ2lzdGVyLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5yZWdpc3Rlci1tZW51IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, storage, toastController, authService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastController = toastController;
        this.authService = authService;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
    };
    RegisterPage.prototype.alertError = function (message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Error",
            text: message,
            type: "error"
        });
    };
    RegisterPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            cssClass: "toast-style"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var newUser_obj = {
            username_st: this.newUsername_st,
            firstname_st: this.newFirstname_st,
            lastname_st: this.newLastname_st,
            email_st: this.newEmail_st,
            phoneNumber_st: this.newPhoneNumber_st,
            password_st: this.newPassword_st
        };
        if (newUser_obj.username_st == undefined) {
            this.alertError("Please enter username");
            return;
        }
        else {
            newUser_obj.username_st = newUser_obj.username_st.trim();
            if (newUser_obj.username_st.length < 6) {
                this.alertError("Please enter username with at least 6 characters");
                return;
            }
        }
        if (newUser_obj.firstname_st == undefined) {
            this.alertError("Please enter surname");
            return;
        }
        else {
            newUser_obj.firstname_st = newUser_obj.firstname_st.trim();
            if (newUser_obj.firstname_st.length < 1) {
                this.alertError("Please enter surname");
                return;
            }
        }
        if (newUser_obj.lastname_st == undefined) {
            this.alertError("Please enter given name");
            return;
        }
        else {
            newUser_obj.lastname_st = newUser_obj.lastname_st.trim();
            if (newUser_obj.lastname_st.length < 1) {
                this.alertError("Please enter given name");
                return;
            }
        }
        if (newUser_obj.email_st == undefined) {
            this.alertError("Please enter email address");
            return;
        }
        else {
            newUser_obj.email_st = newUser_obj.email_st.trim();
            if (newUser_obj.email_st.length < 1) {
                this.alertError("Please enter email address");
                return;
            }
        }
        if (newUser_obj.phoneNumber_st == undefined) {
            this.alertError("Please enter phone number");
            return;
        }
        else {
            newUser_obj.phoneNumber_st = newUser_obj.phoneNumber_st.trim();
            if (newUser_obj.phoneNumber_st.length < 1) {
                this.alertError("Please enter phone number");
                return;
            }
        }
        if (newUser_obj.password_st == undefined) {
            this.alertError("Please enter password");
            return;
        }
        else {
            if (newUser_obj.password_st.length < 8) {
                this.alertError("Passwords must be at least 8 characters in length");
                return;
            }
        }
        if (this.confirmPassword_st == undefined) {
            this.alertError("Please enter confirmation password");
            return;
        }
        else {
            if (this.confirmPassword_st != newUser_obj.password_st) {
                this.alertError("Confirmation password does not match");
                return;
            }
        }
        if (!this.tncChecked_bl) {
            this.alertError("Please tick/agree to our Terms & Conditions");
            return;
        }
        this.authService.registerUser(newUser_obj)
            .then(function (response) {
            _this.authService.loginUser(newUser_obj.username_st, newUser_obj.password_st)
                .then(function (responseData) {
                if (responseData["code"] == 20) {
                    _this.storage.set('uid', responseData["uid"]);
                    _this.storage.set('isguest', false);
                    _this.presentToast("Registration was successful!");
                    _this.navCtrl.navigateRoot("/home");
                }
                else {
                    _this.presentToast("Kindly proceed to login");
                    _this.navCtrl.navigateRoot("/login");
                }
            })
                .catch(function (error) {
                _this.alertError(error);
                return;
            });
        })
            .catch(function (error) {
            _this.alertError(error);
            return;
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map