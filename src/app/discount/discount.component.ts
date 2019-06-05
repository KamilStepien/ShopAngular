import { Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { UserService } from '../user.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private db: DbService, private us:UserService) { }
  ProductDisplay: Observable<any>;


  ngOnInit() {
  //aktualna data
  this.ProductDisplay = this.db.getProducts()
  .pipe(
    map(values => values.filter(a => a.payload.doc.data().newPrice != "")
      .map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
      
        return { id, ...data };
      })
    
    )
  );
}
}
