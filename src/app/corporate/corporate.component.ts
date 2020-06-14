import { Component, OnInit } from '@angular/core';
import { CorporateService } from '../service/corporate.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  corporate;

  constructor(private corporateService : CorporateService) { }

  ngOnInit() {
    this.corporateService.getlatestcorporates().subscribe((resp:any)=>{
      this.corporate = resp.latest_corporate;
      console.log(resp)
    })
  }

}
