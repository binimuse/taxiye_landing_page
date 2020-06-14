import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: "app-book-ride",
  templateUrl: "./book-ride.component.html",
  styleUrls: ["./book-ride.component.css"],
})
export class BookRideComponent implements OnInit {
  lat: any;
  lng: any;
  zoom: number;
  address: string;
  dir = undefined;

  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 },
    };
  }
  constructor() {}

  ngOnInit() {}
}