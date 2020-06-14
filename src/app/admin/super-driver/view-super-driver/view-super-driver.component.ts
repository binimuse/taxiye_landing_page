import { Component, OnInit } from '@angular/core';
import { SuperDriverService } from 'src/app/service/super-driver.service';

@Component({
  selector: 'app-view-super-driver',
  templateUrl: './view-super-driver.component.html',
  styleUrls: ['./view-super-driver.component.css']
})
export class ViewSuperDriverComponent implements OnInit {
  super_driver: any;

  constructor(private superDriverService : SuperDriverService) { }

  ngOnInit() {
    this.superDriverService.getlatestsuperdriver().subscribe((resp : any)=>{
      this.super_driver = resp.latest_news;
    })
  }

}
