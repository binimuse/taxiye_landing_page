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

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: variable-name
  single_tab: any;
  prices: Object;
  constructor(private priceService : PriceService) {}

 
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {
<<<<<<< HEAD

=======
    this.priceService.getprice().subscribe(resp=>{
      this.prices = resp;
      console.log(resp);
    })
>>>>>>> 1c728bce65a39856f1516d113691796c581ebf6b
   }
   open_tab(tab) {
     this.single_tab = tab;
   }
}
