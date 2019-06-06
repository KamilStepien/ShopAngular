import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-discription',
  templateUrl: './product-discription.component.html',
  styleUrls: ['./product-discription.component.css']
})
export class ProductDiscriptionComponent implements OnInit {

  
  product:Observable<any>;

  
  constructor(private route:ActivatedRoute, private db:DbService , private ps:ProductService) { }

  ngOnInit() {
   


    const idProduct = this.route.snapshot.paramMap.get('id');
    if (idProduct) {
      this.db.getProduct(idProduct)
        .pipe(
          first(),
          map(elm => ({
            ...elm.data(),
            id: elm.id
          }))
        )
        .subscribe( elm => {
          this.product =elm;
          console.log(elm);
        });
    }
  }

  addToShopingCard(addproduct:product,quantity:number)
  {
    const User: productWithQuantityBuy = {
      quantityBuy:quantity,
     ...addproduct
    };
    this.ps.addProductToCart(User);
  }

  ChangeMainImage(event ,mainImage  )
  {
    mainImage.src = event.target.src;
  }

}
