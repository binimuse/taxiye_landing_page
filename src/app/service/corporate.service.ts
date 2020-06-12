import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';

@Injectable({
  providedIn: 'root'
})
export class CorporateService {

  constructor(private httpClient: HttpClient) { }
  addcorporates(corporate) {
    return this.httpClient.post(AppConfig.apiRootUrl + '/corporates' ,corporate);
  }
  getcorporates(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/corporates');
  }
  updateNews(id,news){
    return this.httpClient.post(AppConfig.apiRootUrl + "/corporates/update" +
    `?where[id]=`+id,news)
  }
  deleteNews(corporateID){
    return this.httpClient.delete(AppConfig.apiRootUrl + `/corporates/${corporateID}/`);
  } 
}
