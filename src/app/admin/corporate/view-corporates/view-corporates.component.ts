import { Component, OnInit } from '@angular/core';
import { CorporateService } from 'src/app/service/corporate.service';

@Component({
  selector: 'app-view-corporates',
  templateUrl: './view-corporates.component.html',
  styleUrls: ['./view-corporates.component.css']
})
export class ViewCorporatesComponent implements OnInit {
  corporates;
  constructor(private corporateService : CorporateService) {

  }

  ngOnInit() {
    this.corporateService.getcorporates().subscribe(resp=>{
      this.corporates=resp;
    })
  }

}
