import { Data } from '@angular/router';
import { filter, finalize, map, first } from 'rxjs/operators';
import { Observable, identity } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct:FormGroup
  constructor(private snack: MatSnackBar,private storage: AngularFireStorage ,private fb: FormBuilder , private route: ActivatedRoute , private db:DbService) { }
 
  //tablica zawierająca zdjecia do pobrania
  PathImageHref =[];
  ProductId:string;
  CategoryId:string;
  //ilosc zdjec
  NumberOfImage = 0;
  //czy edytujemy jakiś obiekt
  isEdit :boolean;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  ngOnInit() {

   

    this.newProduct = this.fb.group({
      
      name: ['', Validators.required],  
      price: ['',Validators.required], 
      newPrice: [''],   
      quantity: ['',Validators.required ],  
      description: ['',Validators.required],  
    });

    this.route.params.subscribe( params => {
        if (params.category) {
          this.CategoryId =params.category;
          this.isEdit =false;
        }
        if (params.id) {
          this.ProductId =params.id
          this.isEdit =true;
        }
    
    }) ;
    if (this.ProductId) {
      this.db.getProduct(this.ProductId)
        .pipe(
          first(),
          map(product => ({
            ...product.data(),
            id: product.id
          }))
        )
        .subscribe( product => {
          this.newProduct.patchValue(product);
          this.PathImageHref = product.imageUrl;
          console.log(product);
        });
    }
   
    
    
  }

  addProduct(isDiscount:boolean)
  {
    console.log(this.PathImageHref);
    if(this.PathImageHref.length == 0)
    {
      this.PathImageHref[0]="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg";
    }
    const Product: product = {
      
      ...this.newProduct.value,
      categoryId: this.CategoryId,
      isDiscount: isDiscount,
      imageUrl: this.PathImageHref,
     dateOfCreation : new Date().getTime()
    };
    
    

      if(this.isEdit)
      {
        
        this.db.editProduct(this.ProductId,Product);
        this.snack.open('Edytowano Produkt ',  Product.name, {
          duration: 2000,
        });
      }
      else{
        this.db.addProduct(Product);
        this.snack.open('Dodano Produkt ',  Product.name, {
          duration: 2000,
        });
      }
      
    
   
    
    
      this.PathImageHref = [];
  }
  

  upload(event)
  {
    this.NumberOfImage ++;
    const randomId = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = randomId;
    const task = this.storage.upload(filePath, file).then(() => {
         const ref = this.storage.ref(filePath);

         const downloadURL = ref.getDownloadURL().subscribe(url => { 
          this.PathImageHref[this.PathImageHref.length] = url;
         console.log(url);
          console.log(this.PathImageHref);
          });
  });
  
  }

  deletePhoto(url:string)
  {
    let tmp :Array<string> =[]
    for(let i = 0; i< this.PathImageHref.length ; i++)
    {
      if(url != this.PathImageHref[i])
      {
        tmp[tmp.length] = this.PathImageHref[i];
      }
    }
    this.PathImageHref  = tmp;
    console.log(this.PathImageHref);
    this.NumberOfImage--;
  }
   
 

 

}


