import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.css']
})
export class FiltresComponent implements OnInit {

  constructor(private db:DbService , private router : Router) { }
  CategoryDisplay:Observable<any>
 

  ngOnInit() {

 

  this.CategoryDisplay = this.db.getCategory().pipe(
    map( values => values.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
  );


  }

  search(idCategory:string = "all" , priceMin:number , priceMax:number)  
  {
    this.router.navigate(['/filtry/' ,idCategory,priceMin ,priceMax]);
    console.log(idCategory, priceMin , priceMax)
  }
}
