import { Observable } from 'rxjs';
import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private db: DbService, private snack: MatSnackBar , private us:UserService) { }
  ProductDisplay: Observable<any>;
  CategoryId: string;
  //aktualna data w milisekundach
  CurrentDataMiliSeconds:number
  Name: string;
  //dzień w milisekundach
  msInADay = 24 * 60 * 60 * 1000;
  //paramMap.get('id');
  ngOnInit() {
    //aktulan data
    let CurrentDate = new Date();
    this.CurrentDataMiliSeconds = CurrentDate.getTime() - this.msInADay;

    this.ProductDisplay = this.db.getProducts()
      .pipe(
        map(values => values.filter(a => a.payload.doc.data().category == this.CategoryId)
          .map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })

        )
      );

    this.route.params.subscribe(params => {
      
      if (params.id && params.min && params.max )
      {
        this.ProductDisplay = this.db.getProducts()
          .pipe(
            map(values => values.filter(a =>
              { return a.payload.doc.data().categoryId == params.id && ((!a.payload.doc.data().isDiscount)? a.payload.doc.data().price >= params.min && a.payload.doc.data().price <= params.max:a.payload.doc.data().newPrice >= params.min && a.payload.doc.data().newPrice <= params.max )} )
              .map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              })

            )
          );
      }

      else
      {
        
      if (params.name) {
        this.Name = params.name;
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
        this.CategoryId = params.id;
       
        this.ProductDisplay = this.db.getProducts()
          .pipe(
            map(values => values.filter(a => a.payload.doc.data().categoryId == this.CategoryId)
              .map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              })

            )
          );
      }

    }}
    );
  }
  deleteElement(idProduct: string) {
    this.snack.open('Usunieto Produkt ', '', {
      duration: 2000,
    });
    this.db.deleteProduct(idProduct);
  }

  editElement

}





