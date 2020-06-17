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

    $(document).ready(function () {
      $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".contents")
            .slideUp(200);
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".contents").slideUp(200);
          $(this)
            .siblings(".contents")
            .slideDown(200);
        }
      });
    });

  }

}
