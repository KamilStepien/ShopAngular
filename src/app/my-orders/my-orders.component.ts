import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DbService } from '../db.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  OrdersDisplay: Observable<any>;
  
  constructor(private db: DbService , private us :UserService) { }

  ngOnInit() {
    this.OrdersDisplay = this.db.getOrders()
    .pipe(
      map(values => values.filter(a => a.payload.doc.data().userId == this.us.getUserID() ) .map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })

      )
    );
  }

}
