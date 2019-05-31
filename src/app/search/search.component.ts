import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DbService } from '../db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text:string;
  constructor(private db:DbService) { }

  ngOnInit() {


    
  }
}
