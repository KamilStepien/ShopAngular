import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-discription',
  templateUrl: './product-discription.component.html',
  styleUrls: ['./product-discription.component.css']
})
export class ProductDiscriptionComponent implements OnInit {

  
  product:Observable<any>;

  
  constructor(private route:ActivatedRoute, private db:DbService , private ps:ProductService,private snack: MatSnackBar,) { }

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
         
        });
    }
  }

  addToShopingCard(addproduct:product,quantity:number)
  {

    if (( parseInt(this.ps.getQuantityBuy(addproduct.id).toString())+ parseInt(quantity.toString()))<=addproduct.quantity )
    {
    const product: productWithQuantityBuy = {
     
     ...addproduct,
     quantityBuy:quantity
    };
  
    this.ps.addProductToCart(product);
    this.snack.open('Dodano produkt do koszyka', '', {
      duration: 2000,
    });
    }
    else
    {
      this.snack.open('Nie posiadamy takiej ilość prodkutów ', '', {
        duration: 2000,
      });
    }
  }

  ChangeMainImage(event ,mainImage  )
  {
    mainImage.src = event.target.src;
  }

}
