import { Observable } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { DbService } from '../db.service';
import { map, filter, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../user.service';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
  
})
export class CategoriesComponent implements OnInit {

  CategoryDisplay :Observable<any>;
  User = this.us.currenUser;
  
  //czy wyświetlić edycje kategori  
  isEditCategor= false;

  constructor(private db:DbService,
    private snack: MatSnackBar,
    private us :UserService
   ) { }
  ngon

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
   
    console.log(this.User);
    this.snack.open('Dodano kategorie '+ text, '', {
      duration: 2000,
    });
    this.db.addCategory({name :text});
  }

  deleteElement(categoryId:string , categoryName: string )
  {
    
     this.snack.open('Usunieto kategorie '+categoryName,  '', {
      duration: 2000,
    });
    this.db.deleteCategory(categoryId);
    this.db.deleteAllProduct(categoryId);

  }
  
  editName(categoryId:string , newName: string ,categoryName:string)
  {
    
     this.snack.open('Edytowano nazwe kategori z  '+categoryName + " na " +newName,   '', {
      duration: 2000,
    });

    this.db.editCategory(categoryId , { name :newName})
  }
}
