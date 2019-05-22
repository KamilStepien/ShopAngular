import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: AngularFirestore) { }

  /*getFilm(id: string): Observable<any> {
    return this.db.doc('filmy/' + id).get();
  }

  addFilm(film: Film) {
    this.db.collection('filmy').add(film);
  }

  editFilm(film: Film) {
    this.db.doc('filmy/' + film.id).update(film);
  }

  deleteFilm(id: string) {
    this.db.doc('filmy/' + id).delete();
  }

  getFilms(): Observable<any> {
    return this.db.collection('filmy').snapshotChanges();
  }
 */
}
