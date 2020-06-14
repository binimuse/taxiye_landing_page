import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';

@Injectable({
  providedIn: 'root'
})
export class CorporateSignupService {

  constructor(private httpClient : HttpClient) { }
  addcorporate(corporates) {
    return this.httpClient.post(AppConfig.apiRootUrl + '/corporate_sign_ups',corporates);
  }
  getcorporate(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/corporate_sign_ups');
  }
}
