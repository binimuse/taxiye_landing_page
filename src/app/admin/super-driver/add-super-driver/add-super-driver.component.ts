import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AppConfig } from 'src/app/config_file/app-config';
import { SuperDriverService } from 'src/app/service/super-driver.service';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-add-super-driver',
  templateUrl: './add-super-driver.component.html',
  styleUrls: ['./add-super-driver.component.css']
})
export class AddSuperDriverComponent implements OnInit {
  super_driver_form = new FormGroup({
    full_name: new FormControl("", Validators.required),
    trip: new FormControl("", Validators.required),
    vehicle_type: new FormControl("", Validators.required),
    driver_image: new FormControl,
    date: new FormControl
  })
  file_upload: File;
  date: Date = new Date();
  url = AppConfig.apiRootUrl;
  message: import("C:/Users/JESUS/Desktop/Taxiye-landing page/taxiye_landing_new/src/app/model/notification-model").NotificationModel;
  constructor(
    private newsService: GetNewsService,
    private superDriverService : SuperDriverService,
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

  //  add form data and the image file to the database
  addSuperDriver() {
    const fd = new FormData();

    if (this.file_upload) {
      fd.append('image', this.file_upload, this.file_upload.name);
      this.newsService.postImage(fd).subscribe((resp: any) => {
        console.log(resp);
        console.log(resp.result.files.image[0].name);
        this.super_driver_form.value.driver_image = this.url + "Containers/imags/download/" + resp.result.files.image[0].name;
        this.super_driver_form.value.date = this.date;
        this.superDriverService.addsuperdriver(this.super_driver_form.value).subscribe(resp=>{
          this.message = this.authService.checkForAuthentication("success");
        },
        err=>{
          this.message = this.authService.checkForAuthentication(err);
        })
      },
      err=>{
        this.message = this.authService.checkForAuthentication(err);
      })
    }
  }
}
