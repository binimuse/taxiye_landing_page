import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-corporate-signup',
  templateUrl: './corporate-signup.component.html',
  styleUrls: ['./corporate-signup.component.css']
})
export class CorporateSignupComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  login_form = new FormGroup({
    cname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

}
