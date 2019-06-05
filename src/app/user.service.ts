import { Observable, of } from 'rxjs/index';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { CategoriesComponent } from './categories/categories.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //zmiena przechowująca aktulanego użytkownika
  currenUser: user;
  //czy jest ktoś zalogowany;
  isUserLog = false;
  // id użydkownika
  private userId: string;


  constructor() {

   
  }
  
  login(User: user, UserId: string) {
    this.userId = UserId;
    this.isUserLog = true;
    this.currenUser = User;
   

  }

  logOut() {
    this.userId = "";
    this.isUserLog = false;
    this.currenUser = null;
  }
  getUserID(): string {
    if (this.currenUser != null)
      return this.userId
    else
      return "";
  }
  
}