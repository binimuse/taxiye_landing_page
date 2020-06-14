import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import { NewsModel } from 'src/app/model/news-model';
import { FormGroup, FormControl } from '@angular/forms';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { NotificationModel } from 'src/app/model/notification-model';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  news : NewsModel;
  news_to_edit?;
  news_form = new FormGroup({
    news_header : new FormControl(),
    details : new FormControl()
  })
  message: NotificationModel;
  

  constructor(
    private newsService : GetNewsService,
    private authService : AuteServiceService
    ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe((resp:NewsModel)=>{
      this.news = resp;
    })
  }
  SendValueToModal(news){
    this.news_to_edit= news;
  }
  editNews(){
    if(this.news_form.value.news_header==null){
      this.news_form.value.news_header = this.news_to_edit.news_header;
    }
    if(this.news_form.value.details==null){
      this.news_form.value.details = this.news_to_edit.details;
    }
    this.newsService.updateNews(this.news_to_edit.id,this.news_form.value)
    .subscribe(resp=>{
      this.news_to_edit = this.news_form.value;
      this.message = {"status": "success","message":"Success Fully Updated News"};
      this.newsService.getNews().subscribe((resp:NewsModel)=>{
        this.news = resp;
        this.news_form.patchValue({
          news_header : "",
          details : ""
        })
      })
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    );

  }
  deleteNews(id){
    this.newsService.deleteNews(id).subscribe(resp=>{
      this.newsService.getNews().subscribe((resp : NewsModel)=>{
        this.news = resp;
      })
      this.message={"status": "success","message":"Success Fully Deleted News"};
    },
    err=>{
      this.message = this.authService.checkForAuthentication(err);
    }
    )
  }

}
