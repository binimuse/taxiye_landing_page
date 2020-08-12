import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }


  openCity(evt, cityName) {

    
    var display = 'none';
    var nav = document.getElementById('tab');
    var settings = document.getElementById('download');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    settings.style.display = display;
    nav.style.display = display;
    one.style.display = display;
    two.style.display = display;

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    

  }

  ngOnInit() {
  }

}
