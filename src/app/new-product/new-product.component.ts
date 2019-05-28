import { FireStorageService } from './../fire-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  ref:any;
  afStorage:any;
  task:any;
  newProduct:FormGroup
  constructor(private fs:FireStorageService ,private fb: FormBuilder , private route: ActivatedRoute , private db:DbService, private prS : ProductService) { }


  ngOnInit() {
    this.newProduct = this.fb.group({
      
      name: ['', Validators.required],  
    
    });
    console.log(this.fs.GetImage("z"))
   
  }

  addProduct()
  {
    const Product: product = {
      
      ...this.newProduct.value,
      category:this.prS.Curentcategory,
      
    };
    this.db.addProduct(Product);
  }
  //upload  photos in to firebase
  upload(event) {
  // create a random id
  const randomId = Math.random().toString(36).substring(2);
  // create a reference to the storage bucket location
  this.ref = this.afStorage.ref(randomId);
  // the put method creates an AngularFireUploadTask
  // and kicks off the upload
  this.task = this.ref.put(event.target.files[0]);
  }

  
}


