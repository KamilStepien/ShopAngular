import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  localStorageId = "shopingCart ";
  shopList  =[];
  //czy w tablicy shopList jest juz ten produkt
  isProduct:boolean;
  constructor() { }

  


  addProductToCart(Product:productWithQuantityBuy)
  {
    localStorage.clear();
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
      
      }
    
      localStorage.setItem(this.localStorageId ,JSON.stringify(this.shopList) )
    
  }

  getProductList():Array<productWithQuantityBuy>
  {
    this.shopList = JSON.parse(localStorage.getItem(this.localStorageId)) || [];
    
    return this.shopList
  }
 
  deleteProductFromCart(id:string)
  {
    
   let tmp =[];
   this.shopList.forEach(elm => 
    {
      if(elm.id !=id)
      {
        tmp[tmp.length] = elm;
      }
    })
    
    this.shopList = tmp;
    localStorage.setItem(this.localStorageId ,JSON.stringify(this.shopList) )
  
  }


  
}
