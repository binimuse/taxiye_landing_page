import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import {MatRadioModule} from '@angular/material/radio';



@Component({
  selector: "app-book-ride",
  templateUrl: "./book-ride.component.html",
  styleUrls: ["./book-ride.component.css"],
})

export class BookRideComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


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
  

  
  or()
  {
    var visibility = 'hidden';
    var nav1 = document.getElementById('d');
    var nav = document.getElementById('t');
   
  
    nav1.style.visibility = 'hidden';
    nav.style.visibility = 'hidden'; 
  }
  o() {

    
    var visibility = 'visible';
    var nav1 = document.getElementById('d');
    var nav = document.getElementById('t');
   
  
    nav1.style.visibility = 'visible';
    nav.style.visibility = 'visible';

    

  }


  openCity() {

    var nav1 = document.getElementById('d');
    var nav = document.getElementById('t');
    var pr = document.getElementById('pr');
    
  
    nav1.style.visibility = 'hidden';
    nav.style.visibility = 'hidden'; 
    var visibility = 'visible';
    var nav = document.getElementById('map');
   
    var car = document.getElementById('car');
    var cars = document.getElementById('cars');
    nav.style.visibility = 'visible';
    car.style.visibility = 'visible';
    pr.style.visibility = 'visible';
    cars.style.visibility = 'visible';
    

  }

  initAutocomplete() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -33.8688,
        lng: 151.2195
      },
      zoom: 13,
      mapTypeId: "roadmap"
    }); // Create the search box and link it to the UI element.

    var input =<HTMLInputElement> document.getElementById("pac-input");
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = []; // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.

    searchBox.addListener("places_changed", () => {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      } // Clear out the old markers.

      markers.forEach(marker => {
        marker.setMap(null);
      });
      markers = []; // For each place, get the icon, name and location.

      const bounds = new google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        }; // Create a marker for each place.

        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

  
  constructor() {}

  ngOnInit() {}
}