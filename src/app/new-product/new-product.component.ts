import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { FireStorageService } from './../fire-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

 
  newProduct:FormGroup
  constructor(private fs:FireStorageService ,private fb: FormBuilder , private route: ActivatedRoute , private db:DbService) { }
  downloadURL:Observable<any>;
  ProductId:string;

  ngOnInit() {
    this.newProduct = this.fb.group({
      
      name: ['', Validators.required],  
      price: ['',Validators.required  ],  
      quantity: ['',Validators.required ],  
      description: ['',Validators.required],  
    });

    this.route.params.subscribe( params => {this.ProductId =params.id}) ;
    this.downloadURL = this.fs.GetImage();
   
  }

  addProduct()
  {
    const Product: product = {
      
      ...this.newProduct.value,
     category: this.ProductId,
     dateOfCreation : new Date()
    };
    this.db.addProduct(Product);
  }
  
  upload(event)
  {
      this.fs.SetImage(event);
  }
  
}


