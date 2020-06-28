import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/service/office.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-edit-offices',
  templateUrl: './edit-offices.component.html',
  styleUrls: ['./edit-offices.component.css']
})
export class EditOfficesComponent implements OnInit {
  off: Object;
  offices_to_edit: any;
  offices_form = new FormGroup({
    office_name : new FormControl,
    phone : new FormControl,
    lat : new FormControl,
    lag : new FormControl

  })
  message;
  constructor( private officeService : OfficeService,private authService : AuteServiceService) { }

  ngOnInit() {
    this.officeService.getOffices().subscribe(resp=>{
      this.off = resp;
    })
  }
  SendValueToModal(office){
    this.offices_to_edit = office;
  }
  editOffices(office){
    if(this.offices_form.value.office_name ==null || this.offices_form.value.office_name ==""){
      this.offices_form.value.office_name = office.office_name;

    }
    if(this.offices_form.value.phone==null || this.offices_form.value.phone ==""){
      this.offices_form.value.phone = office.phone;
    }
    if(this.offices_form.value.lat==null || this.offices_form.value.lat ==""){
      this.offices_form.value.lat = office.lat;

    }
    if(this.offices_form.value.lag==null || this.offices_form.value.lag ==""){
      this.offices_form.value.lag = office.lag;

    }
    this.officeService.updateOffices(office.id,this.offices_form.value).subscribe(resp=>{
      this.offices_to_edit = this.offices_form.value;
      this.message = this.authService.checkForAuthentication("success");
      console.log(this.message);
      this.offices_form.patchValue({
        office_name: "",
        phone : "",
        lat : "",
        lag : "",
      })
      this.officeService.getOffices().subscribe(resp=>{
        this.off = resp;
      },
      err=>{
        this.message = this.authService.checkForAuthentication(err);
      }
      )
    },
    err=>{
      console.log(err);
      this.message = this.authService.checkForAuthentication(err);
    }
    )



  }
}
