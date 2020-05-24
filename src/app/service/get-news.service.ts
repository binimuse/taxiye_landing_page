import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';


@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  constructor(
    private httpClient: HttpClient
    ) { }
    getNews() {
      return this.httpClient.get(AppConfig.apiRootUrl + '/taxiyes');
      // return this.httpClient.get(AppConfig.apiRootUrl + '/taxiyes');
    }
    postNews(news){
      return this.httpClient.post(AppConfig.apiRootUrl + "/taxiyes",news)
    }
    postImage(images){
      return this.httpClient.post(AppConfig.apiRootUrl + "containers/imags/upload",images);
    }
    
}
