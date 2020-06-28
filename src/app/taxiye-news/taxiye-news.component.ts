import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import { AppConfig } from 'src/app/config_file/app-config';
import { AuteServiceService } from 'src/app/service/aute-service.service';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taxiye-news',
  templateUrl: './taxiye-news.component.html',
  styleUrls: ['./taxiye-news.component.css']
})
export class TaxiyeNewsComponent implements OnInit {
  
  news?;
  single_news?; 
  // tslint:disable-next-line: quotemark
  message;
  constructor(
    private newsService: GetNewsService, 
    private authService: AuteServiceService,
    private dataService: DataService,
    private router : Router
    ) { }

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
    this.dataService.changedata(news);
    console.log(this.dataService.currentMessage);
    this.router.navigate(['view-news']);
    
  }



}
