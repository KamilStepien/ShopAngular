import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-statistic-for-admin',
  templateUrl: './statistic-for-admin.component.html',
  styleUrls: ['./statistic-for-admin.component.css']
})
export class StatisticForAdminComponent implements OnInit {

  constructor(private db: DbService) { }
  ProductDisplay: Observable<any>;
  UsersDisplay: Observable<any>;
  OrdersDisplay: Observable<any>;
  //czy wyświetlić zamowienia
  isDisplayOrder = false;
  //czy wyswietlić produkty
  isDisplayProduct = false;
  //czy wyświetlic użydkowników
  isDisplayUser = false;
  ngOnInit() {
    this.ProductDisplay = this.db.getProducts()
    .pipe(
      map(values => values.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })

      )
    );
    this.UsersDisplay = this.db.getUsersSnapshot()
    .pipe(
      map(values => values.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })

      )
    );

    this.OrdersDisplay = this.db.getOrders()
    .pipe(
      map(values => values.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })

      )
    );

  }

  displayProduct()
  {
    this.isDisplayProduct = true;
    this.isDisplayUser = false;
    this.isDisplayOrder = false;
  }
  displayUser()
  {
    this.isDisplayProduct = false;
    this.isDisplayUser = true;
    this.isDisplayOrder = false;
  }
  displayOrders()
  {
    this.isDisplayProduct = false;
    this.isDisplayUser = false;
    this.isDisplayOrder = true;
  }


  deleteUser(id:string)
  {
    this.db.deleteUser(id);
  }
  
  deleteProduct(id:string)
  {
    this.db.deleteProduct(id);
  }
 

}
