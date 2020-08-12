import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

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
