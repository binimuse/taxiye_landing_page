import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';

@Injectable({
  providedIn: 'root'
})
export class SuperDriverService {

  constructor(private httpClient : HttpClient) { }
  addsuperdriver(driverInfo) {
    return this.httpClient.post(AppConfig.apiRootUrl + '/super-drivers',driverInfo);
  }
  getsuperdriver(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/super-drivers');
  }
  updatesuperdriver(id,driverInfo){
    return this.httpClient.post(AppConfig.apiRootUrl + "/super-drivers/update" +
    `?where[id]=`+id,driverInfo)
  }
  deletesuperdriver(driverId){
    return this.httpClient.delete(AppConfig.apiRootUrl + `/super-drivers/${driverId}/`);
  }
  getlatestsuperdriver(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/super-drivers/getLatest');
  }
}
