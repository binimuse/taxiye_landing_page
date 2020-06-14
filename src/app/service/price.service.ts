import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private httpClient : HttpClient) { }
  addprice(priceInfo) {
    return this.httpClient.post(AppConfig.apiRootUrl + '/prices',priceInfo);
  }
  getprice(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/prices');
  }
  updateprice(id,priceInfo){
    return this.httpClient.post(AppConfig.apiRootUrl + "/prices/update" +
    `?where[id]=`+id,priceInfo)
  }
  deleteprice(priceId){
    return this.httpClient.delete(AppConfig.apiRootUrl + `/prices/${priceId}/`);
  }
}
