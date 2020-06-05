import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { NotificationModel } from 'src/app/model/notification-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form data values
  login_form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });
  // notification message
  message: NotificationModel;



  constructor(private auteservice: AuteServiceService, private router: Router) { }

  ngOnInit() {
  }
  // send login api request
  login() {
    console.log(this.login_form.value);
    this.auteservice.userLogin(this.login_form.value).subscribe((resp: any) => {
      this.message = this.auteservice.checkForAuthentication(resp);
      this.router.navigate(['/admin/homepage']);
    },
    err => {
      console.log(err);
      this.message = this.auteservice.checkForAuthentication(err);
    }
    );
  }

}
