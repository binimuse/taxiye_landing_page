import { Component, OnInit } from '@angular/core';
import { CorporateService } from '../service/corporate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  corporate;

  constructor(private corporateService : CorporateService,public translate: TranslateService) { }

  ngOnInit() {
    this.corporateService.getlatestcorporates().subscribe((resp:any)=>{
      this.corporate = resp.latest_corporate;
      console.log(resp)
    })
/*
    this.translate.addLangs(['English', 'Amharic','Afan oromo',]);
    this. translate.setDefaultLang('English');
    const browserLang =  this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/English|Amharic/) ? browserLang : 'English');
*/
    $(document).ready(function () {
      $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".contents")
            .slideUp(200);
          $(".set > a i")
            .removeClass(" fa-arrow-up")
            .addClass("fa-arrow-right");
        } else {
          $(".set > a i")
            .removeClass(" fa-arrow-up")
            .addClass("fa-arrow-right");
          $(this)
            .find("i")
            .removeClass("fa-arrow-right")
            .addClass(" fa-arrow-up");
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
