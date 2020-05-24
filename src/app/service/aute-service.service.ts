import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config_file/app-config';
import { NotificationModel } from '../model/notification-model';

@Injectable({
  providedIn: 'root'
})
export class AuteServiceService {

  constructor(
    private httpClient : HttpClient
  ) { }
  userLogin(userData){
    return this.httpClient.post(AppConfig.apiRootUrl + "Users/login",userData)
  }
  // check For login response
  checkForAuthentication(login_repo){
    
    // login success
    if(login_repo.id){
      let message : NotificationModel = {"status": "success","message":"Success full"};
      localStorage.setItem("token" , login_repo.id);
      return message
    }

    // login failures 

    
    //connection problem
    if(login_repo.status == 0){
      let message : NotificationModel = {"status": "warning","message":"Connection b/n Server is corrupted"}
      return message;
    }

    // password or email error 
    // else if(login_repo.error.error.message="login failed"){
    //   console.log(login_repo.statusText)
    //   let message : NotificationModel = {"status": "warning","message":"login failed"} 
    //   return message
    // }
    // other errors
    else{
      let message : NotificationModel = {"status": "warning","message":login_repo.error.error.name} 
      return message;
    }
    
    
  }

  // if tokken exist check for aute guard 

  loggedIn(){
    console.log(!!localStorage.getItem("token"));
    return !!localStorage.getItem("token");
    
  }
}
