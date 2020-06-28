import { Component, OnInit, Input,Output} from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AppConfig } from 'src/app/config_file/app-config';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-all-view-news',
  templateUrl: './all-view-news.component.html',
  styleUrls: ['./all-view-news.component.css']
})
export class AllViewNewsComponent implements OnInit {
  
  news_to_view;
  news?;
  

  // tslint:disable-next-line: quotemark
  message;
  constructor(
    private newsService: GetNewsService,
    private authService: AuteServiceService,
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message=> this.news_to_view =message);
    console.log(this.news_to_view);
    this.newsService.getNews().subscribe(resp => {
      this.news = resp;
    },
      err => {
        console.log(err);
        this.message = this.authService.checkForAuthentication(err);
        console.log(this.message)
      }

    )
  }
 

}
