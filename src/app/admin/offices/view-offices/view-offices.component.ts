import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/service/office.service';

@Component({
  selector: 'app-view-offices',
  templateUrl: './view-offices.component.html',
  styleUrls: ['./view-offices.component.css']
})
export class ViewOfficesComponent implements OnInit {
  offices: any;

  constructor(private officesService : OfficeService) { }
  lat = 8.5737791;
  lng = 35.6687268; 
  previous;
  zoom = 6;
  icon = {
    url: 'assets/image/marker.png',
  }
  markers: marker[];
  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  ngOnInit() {
    this.officesService.getOffices().subscribe(resp =>{
      this.offices =resp;
      this.offices = this.offices.map((offices)=>{
        return{label:offices.office_name,label2:offices.phone,lat:offices.lat,lng:offices.lag,draggable: true}
      })
      console.log(this.offices);
      this.markers =this.offices;
    })
  }

}
// tslint:disable-next-line: class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  label2?: string;
  }