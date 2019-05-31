import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shopList  =[];
  //czy w tablicy shopList jest juz ten produkt
  isProduct:boolean;
  constructor() { }

  


  addProductToCart(Product:productWithQuantityBuy)
  {
    this.isProduct =true;
    this.shopList.forEach(elm => 
      {
       if( elm.id == Product.id)
       {
         elm.quantityBuy = parseInt(elm.quantityBuy) + parseInt(Product.quantityBuy.toString()) ;
         this.isProduct =false;
       }
      })
      if(this.isProduct)
      {
        this.shopList[this.shopList.length] = Product;
        console.log(Product)
      }
    
 
    
  }

  getProductList():Array<productWithQuantityBuy>
  {
    return this.shopList
  }
 


  
}
