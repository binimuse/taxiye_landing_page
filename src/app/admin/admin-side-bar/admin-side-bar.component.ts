import { Component, OnInit } from '@angular/core';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config_file/app-config';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {
  dashboard;
  constructor(
    private authService : AuteServiceService,
    private router : Router
    ) { }

  ngOnInit() {
    this.dashboard =AppConfig.dashboard;
  }
  logOut(){
    this.authService.logOut();
    this.router.navigate(['/taxiyeadmin']);
  }
}
