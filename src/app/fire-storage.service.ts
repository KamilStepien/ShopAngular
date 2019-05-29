import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(private afStorage: AngularFireStorage) { }
  ref:any;
  task:any;

   // get image 
   GetImage()
   {
     return this.afStorage.ref('gs://shop-207de.appspot.com/images/5k5i0489u1m').getDownloadURL()
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
