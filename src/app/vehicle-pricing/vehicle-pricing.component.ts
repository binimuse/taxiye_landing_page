import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-pricing',
  templateUrl: './vehicle-pricing.component.html',
  styleUrls: ['./vehicle-pricing.component.css']
})

export class VehiclePricingComponent implements OnInit {

  constructor() {}


  slides = [
    { img: '/assets/image/bike1.png' },
    { img: '/assets/image/bajaj1.png' },
    { img: '/assets/image/taxiye1.png' },
    { img: '/assets/image/mini1.png' },
    { img: '/assets/image/bike1.png' },
    { img: '/assets/image/bajaj1.png' },
    { img: '/assets/image/taxiye1.png' },
    { img: '/assets/image/mini1.png' }
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {
  }

}
