import { database } from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  addOrder(newOrder:order) {
    this.db.collection('zamowienia').add(newOrder);
  }
  
  
  
  addCategory(newCategory: category) {
    this.db.collection('kategorie').add(newCategory);
   
  }

  editProduct(id: string , newProduct:product) {
   
    this.db.doc('product/' + id).update(newProduct);
  }

  editCategory(id: string , newCategory:category) {
   
    this.db.doc('kategorie/' + id).update(newCategory);
  }
 

  
  deleteCategory(id: string) {
    this.db.doc('kategorie/' + id).delete();
  }
  deleteUser(id: string) {
    this.db.doc('users/' + id).delete();
  }
  deleteProduct(id: string) {
    this.db.doc('product/' + id).delete();
  }
  deleteAllProduct(Id: string) {
    
    this.db.collection('product').get().subscribe(value => {value.docs.forEach(doc => {
      if(doc.data().categoryId==Id)
      {
       this.deleteProduct(doc.id);
      }
    });
  })
  }

  getProducts():Observable<any> {
    return this.db.collection('product').snapshotChanges();
  }

  
 

  getCategory():Observable<any> {
    return this.db.collection('kategorie').snapshotChanges();
  }
  getOrders():Observable<any> {
    return this.db.collection('zamowienia').snapshotChanges();
  }
  getProduct(id:string):Observable<any> {
    return this.db.doc('product/'+id).get();
  }

 
 getUsers():Observable<any> {
    return this.db.collection('users').get();
  }
  getUsersSnapshot():Observable<any> {
    return this.db.collection('users').snapshotChanges();
  }
  
 getDB( path:string ):Observable<any> {
    return this.db.collection(path).snapshotChanges();
  }
  
 
}
