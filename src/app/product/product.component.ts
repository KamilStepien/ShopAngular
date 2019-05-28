import { Observable } from 'rxjs';
import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(  private route: ActivatedRoute ,private db: DbService) { }
  ProductDisplay:Observable<any>;
  ProductId:string; 
  //paramMap.get('id');
  ngOnInit() {
    this.ProductDisplay = this.db.getProducts()
    .pipe(
      map( values => values.filter(a => a.payload.doc.data().category == this.ProductId)
      .map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data};
      })
        
        )
    );

    this.route.params.subscribe( params => {this.ProductId =params.id ;
      this.ProductDisplay = this.db.getProducts()
      .pipe(
        map( values => values.filter(a => a.payload.doc.data().category == this.ProductId)
        .map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        })
          
          )
      );} );
}
 
  }
  




