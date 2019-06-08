import { DbService } from './../db.service';
import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private ps:ProductService,private snack: MatSnackBar , private db :DbService , private us:UserService) { }
 

  dataSource; 
  displayedColumns: string[] = ['id','name','category', 'price', 'quantityBuy' ,'sum','buttons'];
 
  ngOnInit() 
  {
  
    this.dataSource = new MatTableDataSource<productWithQuantityBuy>(this.ps.getProductList());
    
  }
  deleteProduct(id:string)
  {
    this.ps.deleteProductFromCart(id);
    this.dataSource = new MatTableDataSource<productWithQuantityBuy>(this.ps.getProductList());
    this.snack.open('Usunieto Produkt z koszyka', '', {
      duration: 2000,
    });
  }
  order()
  {
    //sprwadzanie czy zalogowany jest użydkownik
    if(this.us.isUserLog)
    {
      this.db.addOrder({userId:this.us.getUserID(),products:this.ps.getProductList() , numberOfProducts:this.getSumQuantityProduct() , sumPrice:this.getSumPirceOrder()});
      this.snack.open('Zamówienienie zostałów złożone', '', {
        duration: 2000,
      });
      this.ps.cleanShopList()
      this.dataSource = new MatTableDataSource<productWithQuantityBuy>(this.ps.getProductList());
    }
    else
    {
      this.snack.open('Zanim złożysz zamówienie muszisz się zalogować', '', {
        duration: 2000,
      });
    }
    
  }
  //sumowanie ceny
  getSumPirceOrder():number
  {
    let sum= 0;
    const tmp = this.ps.getProductList();
    for(let i = 0; i < tmp.length; i++)
    {
      
      sum += tmp[i].price * tmp[i].quantityBuy;
    }

    return sum;
  }
  //ilość prodkuktów
  getSumQuantityProduct():number
  {
    let sum= 0;
    const tmp = this.ps.getProductList();
    for(let i = 0; i < tmp.length; i++)
    {
     sum += tmp[i].quantityBuy;
    }

    return sum;
  }
}
