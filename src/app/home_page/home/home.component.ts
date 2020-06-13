import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
// tslint:disable-next-line: no-unused-expression
export class HomeComponent implements OnInit {
  constructor(private news: GetNewsService) {}

  posts: post[] = [
    {
      // tslint:disable-next-line: max-line-length
      discription:
        '1Taxiye is your one-stop solution for all Taxiye is your one-stop solution for all Taxiye is your one-stop solution for all',
      image: '/assets/image/management.png',
      id: 1,
    },
    {
      // tslint:disable-next-line: max-line-length
      discription:
        '2Taxiye is your one-stop solution for all Taxiye is your one-stop solution for all Taxiye is your one-stop solution for all',
      image: '/assets/image/management.png',
      id: 2,
    },
    {
      // tslint:disable-next-line: max-line-length
      discription:
        '3Taxiye is your one-stop solution for all Taxiye is your one-stop solution for all Taxiye is your one-stop solution for all',
      image: '/assets/image/management.png',
      id: 3
    },
  ];
  ngOnInit() {
    console.log('test');
    this.news.getNews().subscribe((resp) => {
      console.log(resp);
    });
  }
}
// tslint:disable-next-line: class-name
interface post {
discription?: string;
image?: string;
id: number;
}
