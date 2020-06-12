import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';

@Injectable({
  providedIn: 'root'
})
export class DriveFeedbackService {

  constructor(private httpClient : HttpClient) { }
  addfeedback(feedbacks) {
    return this.httpClient.post(AppConfig.apiRootUrl + '/drivers-feedbacks',feedbacks);
  }
  getfeedback(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/drivers-feedbacks');
  }
  updatefeedback(id,news){
    return this.httpClient.post(AppConfig.apiRootUrl + "/drivers-feedbacks/update" +
    `?where[id]=`+id,news)
  }
  deletefeedback(feedbackID){
    return this.httpClient.delete(AppConfig.apiRootUrl + `/drivers-feedbacks/${feedbackID}/`);
  } 
  getlatestfeedback(){ 
    return this.httpClient.get(AppConfig.apiRootUrl + '/drivers-feedbacks/getLatest');
  }
}
