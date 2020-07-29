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

    
    var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  dots[slideIndex-1].className += " active";
 
}
    
  }
  
  constructor() {}

  ngOnInit() {}
}