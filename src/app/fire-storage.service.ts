import { Observable } from 'rxjs/index';
import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(private afStorage: AngularFireStorage) { }
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

   // get image 
   GetImage(): Observable<any>
   {
    const ref = this.afStorage.ref('images/scllb8xm4lk');
    return ref.getDownloadURL();
   }

   //set image 
  SetImage(event) {
      // create a random id
  const randomId = Math.random().toString(36).substring(2);
  // create a reference to the storage bucket location
  this.ref = this.afStorage.ref("images/"+randomId);
  // the put method creates an AngularFireUploadTask
  // and kicks off the upload
  this.task = this.ref.put(event.target.files[0]);
   }
  
  


}
