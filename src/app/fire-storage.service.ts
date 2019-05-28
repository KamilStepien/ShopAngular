import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(private afStorage: AngularFireStorage) { }



   // get image 
   GetImage(src:string)
   {
     return this.afStorage.ref('/users/'+src).getDownloadURL();
   }
  
   


}
