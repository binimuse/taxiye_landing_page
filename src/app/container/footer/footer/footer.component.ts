import { Component, OnInit,NgModule} from '@angular/core';
import { TranslateService,TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie'
    })
  ],
  exports: [TranslateModule]
})
export class FooterComponent implements OnInit {

 constructor(public translate: TranslateService, translateCacheService: TranslateCacheService) {
  translateCacheService.init();
 translate.addLangs(['English', 'Amharic','Afan oromo']);
   
 const browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
 translate.use(browserLang.match(/English|Amharic/) ? browserLang : 'English'); 
 }

  ngOnInit() {
  }
  

}


export function httpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
export function translateCacheFactory(translateService: TranslateService, translateCacheSettings: TranslateCacheSettings) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}