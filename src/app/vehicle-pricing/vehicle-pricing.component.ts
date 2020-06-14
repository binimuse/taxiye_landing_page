import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PriceService } from '../service/price.service';

@Component({
  selector: 'app-vehicle-pricing',
  templateUrl: './vehicle-pricing.component.html',
  styleUrls: ['./vehicle-pricing.component.css']
})

export class VehiclePricingComponent implements OnInit {
  single_tab: any;
  prices: Object;
  constructor(private priceService : PriceService) {}

 
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {
    this.priceService.getprice().subscribe(resp=>{
      this.prices = resp;
      console.log(resp);
    })
   }
   open_tab(tab) {
     this.single_tab = tab;
   }
}
