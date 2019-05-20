import { ClothesTypeComponent } from './clothes-type/clothes-type.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {
  path:'koszyk',
  component : ShopingCartComponent
},
{
   path: 'product/:id',
   component : ProductComponent
},
{
  path: ':Type',
  component : ClothesTypeComponent
},
{ path: '**',
 component: PageNotFoundComponent 
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
