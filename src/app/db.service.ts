import { database } from 'firebase';
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
  addProduct(newProduct: product) {
    this.db.collection('product').add(newProduct);
  }
  addCategory(newCategory: category) {
    this.db.collection('kategorie').add(newCategory);
   
  }

  /*
  editCategory(id: string) {
    this.db.doc('kategorie/' + id).update(film);
  }
  */
  deleteCategory(id: string) {
    this.db.doc('kategorie/' + id).delete();
  }
  getProducts():Observable<any> {
    return this.db.collection('product').snapshotChanges();
  }
 
 getUsers():Observable<any> {
    return this.db.collection('users').snapshotChanges();
  }
 getDB( path:string ):Observable<any> {
    return this.db.collection(path).snapshotChanges();
  }
  
 
}
