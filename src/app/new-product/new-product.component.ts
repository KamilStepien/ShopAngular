import { Data } from '@angular/router';
import { filter, finalize, map } from 'rxjs/operators';
import { Observable, identity } from 'rxjs';
import { FireStorageService } from './../fire-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  ArryImagePath: Array <string> = []
  newProduct:FormGroup
  constructor(private snack: MatSnackBar,private fs:FireStorageService ,private fb: FormBuilder , private route: ActivatedRoute , private db:DbService) { }
  downloadURL:Array<Observable<any>> ;
  ProductId:string;
  NumberOfImage = 0;


  ngOnInit() {
    this.newProduct = this.fb.group({
      
      name: ['', Validators.required],  
      price: ['',Validators.required],  
      quantity: ['',Validators.required ],  
      description: ['',Validators.required],  
    });

    this.route.params.subscribe( params => {this.ProductId =params.id}) ;
    
   // this.downloadURL = this.fs.GetImage(this.CurrentIdImage);
    
  }

  addProduct()
  {
    const Product: product = {
      
      ...this.newProduct.value,
     category: this.ProductId,
     dateOfCreation : new Date()
    };
    this.db.addProduct(Product);
    this.snack.open('Dodano Produkt ',  Product.name, {
      duration: 2000,
    });
  }
  
  upload(event)
  {
    this.fs.SetImage(event,"10").pipe( finalize(()=> {  console.log("elm");this.downloadURL[this.NumberOfImage] = this.fs.GetImage("10") })
   ).subscribe();
   this.NumberOfImage ++;  
    //console.log(path);
   // this.DisplayImage(path);
    //this.inputCopyArry(path);
    document.querySelector("#addPicture").querySelector("input").value =null;
  }

  inputCopyArry(path:string )
  {
    if(path != "")
    {
      console.log("rd");
       this.fs.GetImage(path).pipe(finalize(()=> { this.DisplayImage() })).subscribe();
      //this.ArryImagePath[this.NumberOfImage] = path;
      //this.ArryImagePath.forEach(ele => console.log(ele))
     
    }
  }

  DisplayImage()
  {
   
    document.querySelector("#image").innerHTML += '<img width="100px" [src]= "downloadURL['+ +']  | async" />';
  }


}


