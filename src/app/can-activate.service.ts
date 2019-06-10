import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate  {

  constructor(private  us: UserService) { }

  canActivate() {
    return this.us.IsAdmin();
  }
}
