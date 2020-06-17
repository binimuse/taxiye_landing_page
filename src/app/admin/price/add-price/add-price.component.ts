import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { PriceService } from 'src/app/service/price.service';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AppConfig } from 'src/app/config_file/app-config';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  price_form = new FormGroup({
    vechicle_type : new FormControl("",Validators.required),
    base_fee : new FormControl("",Validators.required),
    per_kilometer_fee : new FormControl("",Validators.required),
    per_minute_fee : new FormControl("",Validators.required),
    service_type :new FormControl("",Validators.required),
    vechicle_img : new FormControl
  })
  file_upload: File;
  url = AppConfig.apiRootUrl;
  message: { status: string; message: string; };
  constructor(
    private authService : AuteServiceService,
    private priceService : PriceService,
    private newsService : GetNewsService
    ) { }

  ngOnInit() {
  }
    // on change file reader 
    onFileSelected(event) {
      if (event.target.files.length > 0) {
        this.file_upload = <File>event.target.files[0];
      }
    }
  addprice(){
    const fd = new FormData();
    if (this.file_upload) {
      fd.append('image', this.file_upload, this.file_upload.name);
      this.newsService.postImage(fd).subscribe((resp: any) => {
        this.price_form.value.vechicle_img = this.url + "Containers/imags/download/" + resp.result.files.image[0].name;
        this.priceService.addprice(this.price_form.value).subscribe(resp=>{
          this.price_form.patchValue({
            vechicle_type : "",
            base_fee : "",
            per_kilometer_fee : "",
            per_minute_fee : "",
          });
          this.message = this.authService.checkForAuthentication("success");

        },
        err=>{
          this.message = this.authService.checkForAuthentication(err);
        }
        )
      })
    }
    else{
      this.message = {"status": "warning","message":"the image field can't be empty"};
    }
  }
}
