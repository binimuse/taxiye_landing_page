import { Component, OnInit } from '@angular/core';
import { SuperDriverService } from 'src/app/service/super-driver.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-edit-super-driver',
  templateUrl: './edit-super-driver.component.html',
  styleUrls: ['./edit-super-driver.component.css']
})
export class EditSuperDriverComponent implements OnInit {
  super_driver: Object;
  super_driver_to_edit: any;
  super_driver_form = new FormGroup({
    full_name: new FormControl(),
    trip: new FormControl(),
    vehicle_type: new FormControl(),
  })
  message: { status: string; message: string; };
  constructor(
    private superDriveService : SuperDriverService,
    private authService : AuteServiceService
    ) { }

  ngOnInit() {
    this.superDriveService.getsuperdriver().subscribe(resp=>{
      this.super_driver = resp;
    })
  }
  SendValueToModal(super_driver){
    this.super_driver_to_edit = super_driver;
  }
  editSuperDriver(){
    if(this.super_driver_form.value.full_name==null){
      this.super_driver_form.value.full_name = this.super_driver_to_edit.full_name;
    }
    if(this.super_driver_form.value.trip==null){
      this.super_driver_form.value.trip = this.super_driver_to_edit.trip;
    }
    if(this.super_driver_form.value.vehicle_type==null){
      this.super_driver_form.value.vehicle_type = this.super_driver_to_edit.vehicle_type;
    }
    this.superDriveService.updatesuperdriver(this.super_driver_to_edit.id,this.super_driver_form.value)
    .subscribe(resp=>{
      this.super_driver_to_edit = this.super_driver_form.value;
      this.message = {"status": "success","message":"Success Fully Updated News"};
      this.superDriveService.getsuperdriver().subscribe((resp:any)=>{
        this.super_driver = resp;
        this.super_driver_form.patchValue({
          full_name: "",
          trip: "",
          vehicle_type: ""
        })
      })
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    );

  }
}
