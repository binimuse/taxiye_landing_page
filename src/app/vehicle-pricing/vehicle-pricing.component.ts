import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-vehicle-pricing',
  templateUrl: './vehicle-pricing.component.html',
  styleUrls: ['./vehicle-pricing.component.css']
})

export class VehiclePricingComponent implements OnInit {
  single_tab: any;

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: variable-name

  constructor() {}

 
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {
  }
  
   open_tab(tab) {
     this.single_tab = tab;
   }
}
