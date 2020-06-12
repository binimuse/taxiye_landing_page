import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/service/office.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-add-offices',
  templateUrl: './add-offices.component.html',
  styleUrls: ['./add-offices.component.css']
})
export class AddOfficesComponent implements OnInit {
  offices_form = new FormGroup({
    "office_name":new FormControl("",Validators.required),
    "phone":new FormControl("",Validators.required),
    "lat":new FormControl("",Validators.required),
    "lag":new FormControl("",Validators.required)
  })
  message: { "status": string; "message": string; };
  constructor(private officeService:OfficeService,private authService : AuteServiceService) { }

  ngOnInit() {
  }
  addOffices(){
    this.officeService.postOffices(this.offices_form.value).subscribe((resp:any)=>{
      this.message = { "status": "success", "message": "Success Fully Added Office" };
      this.offices_form.patchValue({
        office_name : "",
        phone : "",
        lat : "",
        lag : ""
      })
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    )
  }
}
