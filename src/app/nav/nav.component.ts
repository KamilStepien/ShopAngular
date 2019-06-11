import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(  private us:UserService)  { }
 
  
  
  ngOnInit() {
   
  }
  

  

  
}
