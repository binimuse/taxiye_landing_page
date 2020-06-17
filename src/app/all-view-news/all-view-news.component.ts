import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AppConfig } from 'src/app/config_file/app-config';
import { AuteServiceService } from 'src/app/service/aute-service.service';

@Component({
  selector: 'app-all-view-news',
  templateUrl: './all-view-news.component.html',
  styleUrls: ['./all-view-news.component.css']
})
export class AllViewNewsComponent implements OnInit {
  news?;
  single_news?;
  // tslint:disable-next-line: quotemark
  message: import("C:/Users/JESUS/Desktop/Taxiye-landing page/taxiye_landing_new/src/app/model/notification-model").NotificationModel;
  constructor(private newsService: GetNewsService, private authService: AuteServiceService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(resp => {
      this.news = resp;
      console.log(resp);
    },
      err => {
        console.log(err);
        this.message = this.authService.checkForAuthentication(err);
        console.log(this.message)
      }

    )
  }
  modal_view(news) {
    this.single_news = news;
  }


}
