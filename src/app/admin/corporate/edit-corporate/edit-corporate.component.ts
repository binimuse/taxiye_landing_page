import { Component, OnInit } from '@angular/core';
import { CorporateService } from 'src/app/service/corporate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';


@Component({
  selector: 'app-edit-corporate',
  templateUrl: './edit-corporate.component.html',
  styleUrls: ['./edit-corporate.component.css']
})
export class EditCorporateComponent implements OnInit {
  corporate;
  message;
  corporate_to_edit: any;
  corporate_form = new FormGroup({
    "corporate_name" : new FormControl(""),
    "full_name" : new FormControl(""),
    "feed_up" : new FormControl("")
  })
  constructor(
    private corporateService : CorporateService,
    private authService : AuteServiceService
    ) { }

  ngOnInit() {
    this.corporateService.getcorporates().subscribe(resp=>{
      this.corporate=resp;
      console.log(this.corporate);
    })
  }
  SendValueToModal(corporate){
    this.corporate_to_edit = corporate;
    console.log(this.corporate_to_edit);
  }
  editNews(corporate){
    console.log(this.corporate_form.value);
    if(this.corporate_form.value.corporate_name ==null || this.corporate_form.value.corporate_name ==""){
      this.corporate_form.value.corporate_name = corporate.corporate_name;
      console.log(corporate.corporate_name);
    }
    if(this.corporate_form.value.full_name==null || this.corporate_form.value.full_name ==""){
      console.log(corporate.full_name);
      this.corporate_form.value.full_name = corporate.full_name;
    }
    if(this.corporate_form.value.feed_up==null || this.corporate_form.value.feed_up ==""){
      this.corporate_form.value.feed_up = corporate.feed_up;
      console.log(corporate.feed_up);
    }
    console.log(this.corporate_form.value);
    this.corporateService.updateNews(corporate.id,this.corporate_form.value)
    .subscribe(resp=>{
      this.corporate_to_edit = this.corporate_form.value;
      this.message = {"status": "success","message":"Success Fully Updated Corporate"};
      this.corporateService.getcorporates().subscribe((resp)=>{
        this.corporate = resp;
        this.corporate_form.patchValue({
          corporate_name : "",
          full_name : "",
          feed_up : ""
        })
      })
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    );
  }
  deleteNews(id){
    this.corporateService.deleteNews(id).subscribe(resp=>{
      this.corporateService.getcorporates().subscribe(resp=>{
        this.corporate = resp;
      })
      this.message={"status": "success","message":"Success Fully Deleted corporates"};
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    )
  }
}
