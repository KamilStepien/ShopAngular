import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ProductDiscriptionComponent } from './product-discription/product-discription.component';
import { ContactComponent } from './contact/contact.component';
import { LastAddedProductComponent } from './last-added-product/last-added-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopingCartComponent,
    ProductComponent,
    PageNotFoundComponent,
    LoginComponent,
    CreateAccountComponent,
    SearchComponent,
    CategoriesComponent,
    NewProductComponent,
    ProductDiscriptionComponent,
    ContactComponent,
    LastAddedProductComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    HttpClientModule,
    AngularSvgIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
