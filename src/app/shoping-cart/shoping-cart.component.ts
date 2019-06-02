import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private ps:ProductService) { }
 

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

  }
}
