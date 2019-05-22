import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  newUser: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit( ) {
    this.newUser = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      e_mail: ['', Validators.required],
      phoneNumber: ['', Validators.required],

    });
  }
}
