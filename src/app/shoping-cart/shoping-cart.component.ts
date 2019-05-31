import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private ps:ProductService) { }

  shopList= [];
 
  ngOnInit() 
  {
    this.shopList = this.ps.getProductList()
  }

}
