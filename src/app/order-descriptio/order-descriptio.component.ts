import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-descriptio',
  templateUrl: './order-descriptio.component.html',
  styleUrls: ['./order-descriptio.component.css']
})
export class OrderDescriptioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private db: DbService) { }
  //id zamówienia 
  OrderDisplay: Observable<any>;
  OrderId: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.OrderId = params.id
      this.OrderDisplay = this.db.getOrders()
        .pipe(
          map(values => values.filter(a => a.payload.doc.id == params.id).map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })

          )
        );
    })
  }

}
