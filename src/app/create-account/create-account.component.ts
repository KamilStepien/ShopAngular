import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  newUser: FormGroup;
  
  constructor(private fb: FormBuilder ,  private auth:AuthService) { }

  ngOnInit( ) {
    this.newUser = this.fb.group({
     
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  

  addUser()
  {
      this.auth.register(this.newUser.value.email,this.newUser.value.password);
  }
}
