import { Component, OnInit } from '@angular/core';
import { CorporateSignupService } from 'src/app/service/corporate-signup.service';

@Component({
  selector: 'app-corporate-to-signup',
  templateUrl: './corporate-to-signup.component.html',
  styleUrls: ['./corporate-to-signup.component.css']
})
export class CorporateToSignupComponent implements OnInit {
  corporate;
  constructor(private CorporatesignupService :CorporateSignupService) { }

  ngOnInit() {
    this.CorporatesignupService.getcorporate().subscribe(resp=>{
      this.corporate = resp;
    })
    
  }

}
