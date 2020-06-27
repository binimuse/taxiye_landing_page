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
  constructor(private news: GetNewsService,) {}

  posts: any;
  ngOnInit() {
    console.log('test');
    
    this.news.getlatestnews().subscribe((resp:any) => {
      
      this.posts = resp.latest_news;
    });
   
  }
}
// tslint:disable-next-line: class-name
interface post {
discription?: string;
image?: string;
id: number;
}
