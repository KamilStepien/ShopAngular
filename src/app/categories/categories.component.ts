import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { DbService } from '../db.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private db:DbService) { }

  ngOnInit() {
  }

  addElement(text:string)
  {
    console.log(text);
    this.db.addCategory({ name :text,  path: "/"+text});
  }
}
