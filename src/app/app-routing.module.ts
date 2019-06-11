import { DeliveryComponent } from './delivery/delivery.component';
import { User } from 'firebase';
import { DiscountComponent } from './discount/discount.component';
import { LastAddedProductComponent } from './last-added-product/last-added-product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDiscriptionComponent } from './product-discription/product-discription.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { StatisticForAdminComponent } from './statistic-for-admin/statistic-for-admin.component';
import { UserService } from './user.service';
import { CanActivateService } from './can-activate.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
 
  {
  path:'koszyk',
  component : ShopingCartComponent
},

{
  path:'nowosci',
  component : LastAddedProductComponent
},
{
  path:'wyprzedaz',
  component : DiscountComponent
},
{
  path:'logowanie',
  component : LoginComponent
},

{
  path:'kontakt',
  component : ContactComponent
},
{
  path:'rejestracja',
  component : CreateAccountComponent
},
{
  path: 'dodajProdukt/:category',
  component : NewProductComponent,
  canActivate: [CanActivateService],
},
{
  path:'edytuj/:category/:id',
  component : NewProductComponent,
  canActivate: [CanActivateService],
},
{
  path: 'szukaj/:name',
  component : ProductComponent
},
{
  path: 'filtry/:id/:min/:max',
  component : ProductComponent
},
{
  path: 'produkt/:id',
  component : ProductDiscriptionComponent
},
{
  path: 'moje-zamowienia',
  component : MyOrdersComponent
},
{
  path: 'statystyka',
  component : StatisticForAdminComponent,
  canActivate: [CanActivateService],

  
},

{
  path: 'dostawa-i-platnosci',
  component : DeliveryComponent,

  
},
{
  path: 'kategorie/:id',
  component : ProductComponent
},


{ path: '**',
 component: PageNotFoundComponent 
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

 }
