import { filter, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/index';
import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { async } from '@angular/core/testing';
import { TryCatchStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(private afStorage: AngularFireStorage ) { }
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;


   // get image 
    GetImage(id:string): Observable<any>
   {
    const ref =  this.afStorage.ref('images/'+id);
    return ref.getDownloadURL();
   }

   //set image , return id image
    SetImage(event  ,id){
  
  // create a reference to the storage bucket location
  this.ref =  this.afStorage.ref("images/"+id);
  // the put method creates an AngularFireUploadTask
  // and kicks off the upload
   return this.ref.put(event.target.files[0]).snapshotChanges()


  }
  
  


}
