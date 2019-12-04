import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'preference',
    loadChildren: './pages/preference/preference.module#PreferencePageModule'
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutPageModule'
  },
  {
    path: 'filter-product-modal',
    loadChildren: './modals/filter-product-modal/filter-product-modal.module#FilterProductModalPageModule'
  },
  {
    path: 'product-details/:id',
    loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule'
  },
  {
    path: 'checkout/:id',
    loadChildren: './pages/checkout/checkout.module#CheckoutPageModule'
  },
  {
    path: 'delivery-modal',
    loadChildren: './modals/delivery-modal/delivery-modal.module#DeliveryModalPageModule'
  },
  {
    path: 'add-delivery-modal',
    loadChildren: './modals/add-delivery-modal/add-delivery-modal.module#AddDeliveryModalPageModule'
  },
  {
    path: 'shipping-modal',
    loadChildren: './modals/shipping-modal/shipping-modal.module#ShippingModalPageModule'
  },
  {
    path: 'payment',
    loadChildren: './pages/payment/payment.module#PaymentPageModule'
  },
  {
    path: 'payment/payment-complete',
    loadChildren: './pages/payment-complete/payment-complete.module#PaymentCompletePageModule'
  },
  {
    path: '*',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}