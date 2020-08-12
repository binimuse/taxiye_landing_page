import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input()
  contents:[];
   
  constructor(public translate: TranslateService) {
/*
    translate.addLangs(['English', 'Amharic']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Amharic/) ? browserLang : 'English'); 
    */
  }
  

  ngOnInit() {
  }

}
