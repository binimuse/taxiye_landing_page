import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';


@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private httpClient: HttpClient) { }
  postOffices(office){
    return this.httpClient.post(AppConfig.apiRootUrl +'/offices',office);
  };
  getOffices(){
    return this.httpClient.get(AppConfig.apiRootUrl +'/offices');
  } 
  updateOffices(id,office){
    return this.httpClient.post(AppConfig.apiRootUrl + "/offices/update" +
    `?where[id]=`+id,office)
  }

  sendEmail(url, data) {
    return this.httpClient.post(url, data);
  }
}
