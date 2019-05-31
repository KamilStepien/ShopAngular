import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-last-added-product',
  templateUrl: './last-added-product.component.html',
  styleUrls: ['./last-added-product.component.css']
})
export class LastAddedProductComponent implements OnInit {

  constructor(private db: DbService) { }
  ProductDisplay: Observable<any>;
  Category:string ="dada";
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
}
}
