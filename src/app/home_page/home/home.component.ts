import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
// tslint:disable-next-line: no-unused-expression
export class HomeComponent implements OnInit {
  constructor(private news: GetNewsService,) {}
  single_news?;
  posts: any;
  ngOnInit() {
    console.log('test');
    this.news.getlatestnews().subscribe((resp:any) => {
      console.log(resp);
      this.posts = resp.latest_news;
    });
   jQuery('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3
});
  }
  modal_view(news) {
    this.single_news = news;
  }
}
// tslint:disable-next-line: class-name
interface post {
discription?: string;
image?: string;
id: number;
}
