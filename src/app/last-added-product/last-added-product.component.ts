import { Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-last-added-product',
  templateUrl: './last-added-product.component.html',
  styleUrls: ['./last-added-product.component.css']
})
export class LastAddedProductComponent implements OnInit {

  constructor(private db: DbService) { }
  ProductDisplay: Observable<any>;

  //dzień w milisekundach
  msInADay = 24 * 60 * 60 * 1000;
  //aktualna data
  CurrentDataMiliseconds:number;
  ngOnInit() {
    //aktualna data
    let currentDate = new Date();
    // data w milisekundach;
    this.CurrentDataMiliseconds = currentDate.getTime();
    this.ProductDisplay = this.db.getProducts()
  .pipe(
    map(values => values.filter(a => this.CurrentDataMiliseconds < ((new Date(a.payload.doc.data().dateOfCreation).getTime() + this.msInADay)))
      .map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
      
        return { id, ...data };
      })
    
    )
  );
}
}
