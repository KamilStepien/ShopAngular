import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { DbService } from '../db.service';
import { map, filter, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
  
})
export class CategoriesComponent implements OnInit {

  CategoryDisplay :Observable<any>;


  constructor(private db:DbService,
    private snack: MatSnackBar,
    private prS : ProductService) { }

  ngOnInit() {
    this.CategoryDisplay = this.db.getDB("kategorie")
    .pipe(
      map( values => values.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        }))
    );
  }
  addElement(text:string)
  {
    this.snack.open('Dodano kategorie '+ text, '', {
      duration: 2000,
    });
    this.db.addCategory({ name :text,  path: "/kategorie/"+text});
  }

  deleteElement(idCategory:string)
  {
    //this.db.getCategory(idCategory).subscribe(value => console.log(value.docs))
    this.snack.open('Usunieto kategorie ',  '', {
      duration: 2000,
    });
    this.db.deleteCategory(idCategory);
  }
  SetCurrentCategory(name:String)
  {
    this.prS.Curentcategory = name;
   
  }
}
