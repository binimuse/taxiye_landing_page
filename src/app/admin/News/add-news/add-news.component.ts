import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationModel } from 'src/app/model/notification-model';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { AppConfig } from 'src/app/config_file/app-config';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  file_upload: File = null;
  url = AppConfig.apiRootUrl;
  news_form = new FormGroup({
    news_header: new FormControl("", Validators.required),
    details: new FormControl("", Validators.required),
    image_url: new FormControl(""),
    date: new FormControl("")
  })
  message: NotificationModel;

  constructor(private newsService: GetNewsService, private authService: AuteServiceService) { }
  date: Date = new Date();
  ngOnInit() {


  }



  // on change file reader 
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.file_upload = <File>event.target.files[0];
    }
  }

  //  add form data and the image file to the database 
  addNews() {

    const fd = new FormData();
    
    if (this.file_upload) {
      fd.append('image', this.file_upload, this.file_upload.name);
      this.newsService.postImage(fd).subscribe((resp: any) => {
        console.log(resp);
        console.log(resp.result.files.image[0].name);
        this.news_form.value.image_url = this.url + "Containers/imags/download/" + resp.result.files.image[0].name;
        this.news_form.value.date = this.date;
        console.log(this.news_form.value);
        this.newsService.postNews(this.news_form.value).subscribe(resp => {
          this.news_form.patchValue({
            news_header : "",
            details : ""
          })
          this.message = { "status": "success", "message": "Success Fully Added News" }
        },
          err => {
            console.log(err);
            console.log(err.statusText);
            this.message = this.authService.checkForAuthentication(err);
          }
        )
      },
        err => {
          this.message = this.authService.checkForAuthentication(err);
        }
      )
    }else{
      this.message = {"status": "warning","message":"the image field can't be empty"};
    }

  }
}
