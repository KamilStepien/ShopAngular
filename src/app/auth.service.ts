import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  constructor(private fireAuth: AngularFireAuth) { }


  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login(email:string, password:string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email:string, password:string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }
}
