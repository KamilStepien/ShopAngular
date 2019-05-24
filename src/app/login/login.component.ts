import { Observable } from 'rxjs/index';
import { auth, User } from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: FormGroup;
  user:any ;
  



  
  constructor(  private fb:FormBuilder , private db:DbService) { }

  ngOnInit() {
    
    this.loginUser = this.fb.group(
      {
        password: [''],
        email: [''],
      }
    )
    
  }
  login()
  {
    this.db.getUsers().subscribe(value => {value.docs.forEach(doc => {
      if(doc.data().password == this.loginUser.value.password && doc.data().email == this.loginUser.value.email)
      {
        this.user = doc.data();   
      }
    });
  })
  }
 
  loginOut()
  {
    
    this.user = null;
    console.log(this.user)
    
  }
}
