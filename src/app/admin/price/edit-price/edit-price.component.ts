import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/service/price.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.css']
})
export class EditPriceComponent implements OnInit {
  price: Object;
  price_to_edit: any;
  price_form = new FormGroup({
    vechicle_type : new FormControl,
    base_fee : new FormControl,
    per_kilometer_fee : new FormControl,
    per_minute_fee : new FormControl
  })
  message: any;

  constructor(
    private priceService : PriceService,
    private authService : AuteServiceService
    ) { }

  ngOnInit() {
    this.priceService.getprice().subscribe(resp=>{
      this.price = resp;
    })
  }
  SendValueToModal(price){
    this.price_to_edit = price;
  }
  editprice(){
    if(this.price_form.value.vechicle_type ==null || this.price_form.value.vechicle_type ==""){
      this.price_form.value.vechicle_type = this.price_to_edit.vechicle_type;
      console.log(this.price_to_edit.vechicle_type);
    }
    if(this.price_form.value.base_fee==null || this.price_form.value.base_fee ==""){
      console.log(this.price_to_edit.base_fee);
      this.price_form.value.base_fee = this.price_to_edit.base_fee;
    }
    if(this.price_form.value.per_kilometer_fee==null || this.price_form.value.per_kilometer_fee ==""){
      console.log(this.price_to_edit.per_kilometer_fee);
      this.price_form.value.per_kilometer_fee = this.price_to_edit.per_kilometer_fee;
    }
    if(this.price_form.value.per_minute_fee==null || this.price_form.value.per_minute_fee ==""){
      console.log(this.price_to_edit.per_minute_fee);
      this.price_form.value.per_minute_fee = this.price_to_edit.per_minute_fee;
    }
    this.priceService.updateprice(this.price_to_edit.id,this.price_form.value).subscribe(resp=>{
      this.price_to_edit =this.price_form.value;
      this.price_form.patchValue({
        vechicle_type : "",
        base_fee : "",
        per_kilometer_fee : "",
        per_minute_fee : ""
      })      
      this.priceService.getprice().subscribe(resp=>{
        this.price =resp;
        this.message = this.authService.checkForAuthentication('success')
      },
      err=>{
        this.message = this.authService.checkForAuthentication(err)
      }
      )
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err)
    }
    )
  }
  deleteprice(id){
    this.priceService.deleteprice(id).subscribe(resp=>{
      this.message = this.authService.checkForAuthentication('success');
      this.priceService.getprice().subscribe(resp=>{
        this.price =resp;
      })
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err)
    }
    )
  }
}
