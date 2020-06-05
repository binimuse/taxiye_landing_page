import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css'],
})

export class OfficesComponent implements OnInit {

  constructor() {}

  lat = 8.5737791;
  lng = 35.6687268;
  previous;
  zoom = 6;
  icon = {
    url: 'assets/image/marker.png',
  }
  markers: marker[] = [
    {
      lat: 8.99958,
      lng: 38.820551,
      label: 'Taxiye Addis ababa',
      label2: '+251935299200',
      draggable: true,
      // addis ababa
    },
    {
      lat: 8.7470477,
      lng: 38.981003,
      draggable: false,
      label: 'Taxiye Bishoftu',
      label2: '+251935299200',
      // bishoftu
    },
    {
      lat: 8.537969,
      lng: 39.255904,
      draggable: true,
      label: 'Taxiye Adama',
      label2: '+251935299200',
      // adama
    },
    {
      lat: 7.0421716,
      lng: 38.4686699,
      draggable: true,
      label: 'Taxiye Hawassa',
      label2: '+251935299200',
      // Hawassa
    },
    {
      lat: 13.4899926,
      lng: 39.4686699,
      draggable: true,
      label: 'Taxiye Mekele',
      label2: '+251935299200',
      // mekele
    },
    {
      lat: 11.589541,
      lng: 37.3866263,
      draggable: true,
      label: 'Taxiye Bihar dar',
      label2: '+251935299200',
      // bihar dar
    },
    {
      lat: 12.313171,
      lng: 37.471023,
      draggable: true,
      label: 'Taxiye Gondar',
      label2: '+251935299200',
      // gondar
    },
    {
      lat: 9.606796,
      lng: 41.8493225,
      draggable: true,
      label: 'Taxiye Dire Dawa',
      label2: '+251935299200',
      // dire dawa
    }
  ];
  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  ngOnInit() {}
}
// tslint:disable-next-line: class-name
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
label2?: string;
}
