import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AppConfig } from 'src/app/config_file/app-config';
import { DriveFeedbackService } from 'src/app/service/drive-feedback.service';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-add-driver-feedback',
  templateUrl: './add-driver-feedback.component.html',
  styleUrls: ['./add-driver-feedback.component.css']
})
export class AddDriverFeedbackComponent implements OnInit {
  date: Date = new Date();
  url = AppConfig.apiRootUrl;
  feedback_form = new FormGroup({
    driver_feedback : new FormControl("",Validators.required),
    driver_fullname : new FormControl("",Validators.required),
    driver_img : new FormControl,
    date : new FormControl
  })
  file_upload: File;
  message: { status: string; message: string; };
  constructor(
    private newsService : GetNewsService,
    private feedbackService : DriveFeedbackService,
    private authService : AuteServiceService
    ) { }

  ngOnInit() {
  }
 // on change file reader 
 onFileSelected(event) {
  if (event.target.files.length > 0) {
    this.file_upload = <File>event.target.files[0];
  }
}
add_feedBack(){
  const fd = new FormData();
    
    if (this.file_upload) {
      fd.append('image', this.file_upload, this.file_upload.name);
      this.newsService.postImage(fd).subscribe((resp: any) => {
        this.feedback_form.value.driver_img = this.url + "Containers/imags/download/" + resp.result.files.image[0].name;
        this.feedback_form.value.date = this.date;
        this.feedbackService.addfeedback(this.feedback_form.value).subscribe(resp=>{
          this.message = this.authService.checkForAuthentication("success");
          this.feedback_form.patchValue({
            driver_feedback : "",
            driver_fullname : "",
          })
        },
        err=>{
          this.message=this.authService.checkForAuthentication(err);
        }
        )
      },
      err=>{
        this.message = this.authService.checkForAuthentication(err);
      }
      )
    }
    else{
      this.message = {"status": "warning","message":"the image field can't be empty"};
    }
}
}
