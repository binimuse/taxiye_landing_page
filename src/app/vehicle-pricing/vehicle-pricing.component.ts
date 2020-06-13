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
  constructor() {}

  tb = [
    { img: '/assets/image/bike1.png', dis: 'aaaaaaaaa' },
    { img: '/assets/image/bajaj1.png', dis: 'aaaaaaaaa1'  },
    { img: '/assets/image/taxiye1.png', dis: 'aaaaaaaaa2'  },
    { img: '/assets/image/mini1.png', dis: 'aaaaaaaaa3'  },
    { img: '/assets/image/bike1.png', dis: 'aaaaaaaaa4'  },
    { img: '/assets/image/bajaj1.png', dis: 'aaaaaaaaa5'  },
    { img: '/assets/image/taxiye1.png', dis: 'aaaaaaaaa6'  },
    { img: '/assets/image/mini1.png', dis: 'aaaaaaaaa7'  }
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {
  
   }
   open_tab(tab) {
     this.single_tab = tab;
   }
}
