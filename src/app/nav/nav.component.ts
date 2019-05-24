import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }
 
  
  
  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
  )
      .subscribe(event => {
        this.createPath(event.url)
        
      });
  }
  
  createPath(routherUrl:string)
  {
  
    let tmp = "Start - ";
    for(let i=1 ; i<routherUrl.length ; i++ )
    {
      if(i==1)
      {
        tmp += routherUrl[i].toUpperCase();
      }
      else if(routherUrl[i]=='-')
      {
        i++;
        tmp += " "+routherUrl[i].toUpperCase();
      }
      else 
      {
        tmp += routherUrl[i];
      }
    }
    


  }
}
