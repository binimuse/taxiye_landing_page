import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { OfficeService } from '../service/office.service';
import {FormsModule} from '@angular/forms';
import { FormControl, Validators } from "@angular/forms";


declare var require: any





@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css'],
  
})




export class OfficesComponent implements OnInit {
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);


  


  offices: any;

  constructor(private officesService :OfficeService) {}

  
  
  register() {
    this.loading = true;
   
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    }
    this.offices.sendEmail("http://localhost:3000/neww", user).subscribe(
      data => {
        let res:any = data; 
       alert(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        alert(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  
    }
   

  lat = 8.5737791;
  lng = 35.6687268;
  previous;
  zoom = 6;
  icon = {
    url: 'assets/image/marker.png',
  }
  markers: marker[] ;
  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }



 
  ngOnInit() {










    
    this.officesService.getOffices().subscribe(resp =>{
      this.offices =resp;
      this.offices = this.offices.map((offices)=>{
        return{label:offices.office_name,label2:offices.phone,lat:offices.lat,lng:offices.lag,draggable: true}
      })
      console.log(this.offices);
      this.markers =this.offices;
    })

  



  



    
  }


 

  

  
}


// tslint:disable-next-line: class-name
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
label2?: string;
}



