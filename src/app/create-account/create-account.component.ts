import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DbService } from '../db.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  newUser: FormGroup;
  dubleEmail = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(private fb: FormBuilder , private db:DbService ) { }

  ngOnInit( ) {
    this.newUser = this.fb.group({
      password: ['', Validators.required],
      name: ['', Validators.required],  
      lastName: ['', Validators.required],
      address: ['', Validators.required],
    });

    
  }
  

  addUser()
  {
    this.dubleEmail = false;

    this.db.getUsers().subscribe(value => {value.docs.forEach(doc => {
      if(doc.data().email == this.emailFormControl.value)
      {
        this.dubleEmail = true;
      }
    });
    if(!this.dubleEmail)
    {
      const User: user = {
        email: this.emailFormControl.value,
        ...this.newUser.value
      };
      this.db.addUser(User)
    }
    
    });
  }
}


