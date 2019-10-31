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
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule'
  },
  {
    path: 'nfc',
    loadChildren: './pages/nfc/nfc.module#NFCPageModule'
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
    path: '*',
    redirectTo: 'home'
  },
  { path: 'delivery-modal', loadChildren: './modals/delivery-modal/delivery-modal.module#DeliveryModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}