import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetNewsService } from 'src/app/service/get-news.service';
import { CorporateService } from 'src/app/service/corporate.service';
import { AppConfig } from 'src/app/config_file/app-config';
import { AuteServiceService } from 'src/app/service/aute-service.service';


@Component({
  selector: 'app-add-corporates',
  templateUrl: './add-corporates.component.html',
  styleUrls: ['./add-corporates.component.css']
})
export class AddCorporatesComponent implements OnInit {
  file_upload: File = null;
  date: Date = new Date();
  corporate_form = new FormGroup({
    corporate_name: new FormControl("", Validators.required),
    full_name: new FormControl("", Validators.required),
    feed_up: new FormControl("", Validators.required),
    date: new FormControl(""),
    corporate_logo: new FormControl("")
  })
  message: { "status": string; "message": string; };
  constructor(
    private newsService: GetNewsService,
    private corporateService: CorporateService,
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

  addcorporate() {
    const fd = new FormData();
    if (this.file_upload) {
      fd.append('image', this.file_upload, this.file_upload.name);
      console.log(this.corporate_form);
      this.newsService.postImage(fd).subscribe((resp: any) => {
        this.corporate_form.value.corporate_logo = AppConfig.apiRootUrl + "Containers/imags/download/" + resp.result.files.image[0].name;
        this.corporate_form.value.date = this.date;
        this.corporateService.addcorporates(this.corporate_form.value).subscribe((resp : any)=>{
          this.corporate_form.patchValue({
            corporate_name : "",
            full_name : "",
            feed_up : ""
          })
          this.message = this.authService.checkForAuthentication("success");
        },
        err => {
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
