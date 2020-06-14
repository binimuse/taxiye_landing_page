import { Component, OnInit } from '@angular/core';
import { DriveFeedbackService } from 'src/app/service/drive-feedback.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-edit-driver-feedback',
  templateUrl: './edit-driver-feedback.component.html',
  styleUrls: ['./edit-driver-feedback.component.css']
})
export class EditDriverFeedbackComponent implements OnInit {
  feedback: any;
  feedback_to_edit: any;
  feedback_form = new FormGroup({
    driver_fullname : new FormControl,
    driver_feedback : new FormControl
  });
  message;

  constructor(private feedService : DriveFeedbackService,private authService : AuteServiceService) { }

  ngOnInit() {
    this.feedService.getfeedback().subscribe(resp=>{
      this.feedback = resp;
    })
  }
  SendValueToModal(feedback){
    this.feedback_to_edit =feedback;
  }
  editfeedback(){
    if(this.feedback_form.value.driver_fullname==null){
      this.feedback_form.value.driver_fullname = this.feedback_to_edit.driver_fullname;
    }
    if(this.feedback_form.value.driver_feedback==null){
      this.feedback_form.value.driver_feedback = this.feedback_to_edit.driver_feedback;
    }
    console.log(this.feedback_form.value);
    this.feedService.updatefeedback(this.feedback_to_edit.id,this.feedback_form.value)
    .subscribe(resp=>{
      this.feedService.getfeedback().subscribe(resp=>{
        this.feedback_form.patchValue({
          driver_fullname : "",
          driver_feedback : ""
        })
        this.feedback = resp;
        this.message = this.authService.checkForAuthentication("success");
      })
    },
    err=>{
      this.message =this.authService.checkForAuthentication(err);
    }
    )
  }
  deletefeedback(id){
    this.feedService.deletefeedback(id).subscribe(resp=>{
      this.message = this.authService.checkForAuthentication("success");
      this.feedService.getfeedback().subscribe(resp=>{
        this.feedback = resp;
      })
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    )
  }

}
