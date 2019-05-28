import { CreateAccountComponent } from './create-account/create-account.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
 
  {
  path:'koszyk',
  component : ShopingCartComponent
},
{
  path:'logowanie',
  component : LoginComponent
},
{
  path:'rejestracja',
  component : CreateAccountComponent
},
{
  path: 'dodajProdukt/:id',
  component : NewProductComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
