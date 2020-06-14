import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DriveFeedbackService } from '../service/drive-feedback.service';
import { SuperDriverService } from '../service/super-driver.service';
@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {
  latest_fb: any;
  super_driver: any;

  constructor(
    private feedbackService : DriveFeedbackService,
    private superDriverService :SuperDriverService
    ) { }

  ngOnInit() {
    this.superDriverService.getlatestsuperdriver().subscribe((resp : any)=>{
      this.super_driver = resp.latest_news;
      console.log(this.super_driver)
    })
    this.feedbackService.getlatestfeedback().subscribe((resp:any)=>{
      this.latest_fb = resp.latest_news;

    })
    $(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".contents")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".contents").slideUp(200);
      $(this)
        .siblings(".contents")
        .slideDown(200);
    }
  });
});

  }

  // for jquery code

}
