import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css'],
})
export class OfficesComponent implements OnInit {
  lat = 8.5737791;
  lng = 35.6687268;
  constructor() {}

  ngOnInit() {}
}
