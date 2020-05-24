import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {
  news: Object;
  single_news;
  constructor(private newsService : GetNewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(resp=>{
      this.news = resp;
      console.log(resp);
    })
  }
  modal_view(news){
    this.single_news = news;
  }
}
