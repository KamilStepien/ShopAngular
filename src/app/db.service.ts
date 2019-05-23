import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: AngularFirestore) { }

  getUser(name: string ):Observable<any> {
    return this.db.doc('users/' + name).get();
  }

  addUser(newUser: user) {
    this.db.collection('users').add(newUser);
  }
/*
  editFilm(film: Film) {
    this.db.doc('filmy/' + film.id).update(film);
  }

  deleteFilm(id: string) {
    this.db.doc('filmy/' + id).delete();
  }
*/
 getUsers():Observable<any> {
    return this.db.collection('users').get();
  }
 
}
