import { Observable } from 'rxjs';
import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private db: DbService, private snack: MatSnackBar) { }
  ProductDisplay: Observable<any>;
  Category: string;
  Name: string;

  //paramMap.get('id');
  ngOnInit() {
    this.ProductDisplay = this.db.getProducts()
      .pipe(
        map(values => values.filter(a => a.payload.doc.data().category == this.Category)
          .map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })

        )
      );

    this.route.params.subscribe(params => {
      ;

      if (params.name) {
        this.Name = params.name;
        console.log(params);
        this.ProductDisplay = this.db.getProducts()
          .pipe(
            map(values => values.filter(a => a.payload.doc.data().name == this.Name)
              .map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              })

            )
          );
      }

      if (params.id) {
        this.Category = params.id;
        console.log(params);
        this.ProductDisplay = this.db.getProducts()
          .pipe(
            map(values => values.filter(a => a.payload.doc.data().category == this.Category)
              .map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              })

            )
          );
      }

    }
    );
  }
  deleteElement(idProduct: string) {
    //this.db.getCategory(idCategory).subscribe(value => console.log(value.docs))
    this.snack.open('Usunieto Produkt ', '', {
      duration: 2000,
    });
    this.db.deleteProduct(idProduct);
  }

}





