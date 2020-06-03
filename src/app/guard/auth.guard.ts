import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
import { AuteServiceService } from '../service/aute-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private AuthService : AuteServiceService, private route: Router) {

  }
  canActivate(){
    if (this.AuthService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['taxiyeadmin']);
      return false;
    }
  }
  canActivateChild(){
    if (this.AuthService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['taxiyeadmin']);
      return false;
    }
  }
  canLoad(){
    if (this.AuthService) {
      return true;
    } else {
      this.route.navigate(['taxiyeadmin']);
      return false;
    }
  }

}
