import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(public translate: TranslateService) {
    /*
    translate.addLangs(['English', 'Amharic','Afan oromo',]);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Amharic/) ? browserLang : 'English');
    */
  }

  ngOnInit() {
  }

}
