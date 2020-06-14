import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CorporateSignupService } from '../service/corporate-signup.service';
import { AuteServiceService } from '../service/aute-service.service';
@Component({
  selector: 'app-corporate-signup',
  templateUrl: './corporate-signup.component.html',
  styleUrls: ['./corporate-signup.component.css']
})
export class CorporateSignupComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  corporate_form = new FormGroup({
    company_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required)
  });
  message;
  constructor(
    private corporateSignUpService : CorporateSignupService,
    private auteService : AuteServiceService
    ) { }

  ngOnInit() {
    
  }
  addcorporate(){
    this.corporateSignUpService.addcorporate(this.corporate_form.value).subscribe(resp=>{
      this.message = this.auteService.checkForAuthentication('success');
    },
    err=>{
      this.message = this.auteService.checkForAuthentication(err);
    }
    )
  }

}
