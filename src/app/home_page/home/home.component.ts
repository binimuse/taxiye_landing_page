import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


// tslint:disable-next-line: no-unused-expression
export class HomeComponent implements OnInit {
 
  
  
  constructor(private news: GetNewsService,public translate: TranslateService) {
/*
    translate.addLangs(['English', 'Amharic']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Amharic/) ? browserLang : 'English'); 
    */
  }
  
 
  hide() {
    
   }

  
  
  openCity(evt, cityName) {

    
    var display = 'none';
    var nav = document.getElementById('tab');
    var settings = document.getElementById('download');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    settings.style.display = display;
    nav.style.display = display;
    one.style.display = display;
    two.style.display = display;

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    

  }


  

  
  
  single_news?;
  posts: any;
  ngOnInit() {
    console.log('test');
    
    this.news.getlatestnews().subscribe((resp:any) => {
      
      this.posts = resp.latest_news;
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
 

