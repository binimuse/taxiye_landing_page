import { Component, OnInit } from '@angular/core';
import { DriveFeedbackService } from 'src/app/service/drive-feedback.service';

@Component({
  selector: 'app-view-driver-feedback',
  templateUrl: './view-driver-feedback.component.html',
  styleUrls: ['./view-driver-feedback.component.css']
})
export class ViewDriverFeedbackComponent implements OnInit {
  latest_fb : any;

  constructor(private feedbackService : DriveFeedbackService) { }

  ngOnInit() {
    this.feedbackService.getlatestfeedback().subscribe((resp:any)=>{
      this.latest_fb = resp.latest_news;
      console.log(this.latest_fb);
    })
  }

}
