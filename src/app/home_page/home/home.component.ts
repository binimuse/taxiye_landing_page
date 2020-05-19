import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private news :GetNewsService) { }

  ngOnInit() {
    console.log("test");
    this.news.getNews().subscribe(resp =>{
        console.log(resp);
    })
    
  }
}
