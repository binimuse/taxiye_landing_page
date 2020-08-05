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
  



  openCity(evt, cityName) {
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


  loadHomepage() {

    
    var DOMAIN_NAME = './home.component.html';

    
    
    var html_home = '';
   
        
    var html_product = '<h1>PRODUCTS PAGE</h1>';
    html_product += '<h3>Add content Products page here!</h3>';
    html_product += '<h4>Any question or Task, Please Contact with me: luyenthinhanh.contact@gmail.com!</h4>';
    
   
    history.pushState({},"",DOMAIN_NAME + "/home");
				document.getElementById('main-content').innerHTML = html_home;
    
  }
  loadBooking() {

    
    var DOMAIN_NAME = './home.component.html';

    
    
    var html_home = '';
   
        
    var html_product = '<h1>PRODUCTS PAGE</h1>';
    html_product += '<h3>Add content Products page here!</h3>';
    html_product += '<h4>Any question or Task, Please Contact with me: luyenthinhanh.contact@gmail.com!</h4>';
    
   
    history.pushState({},"",DOMAIN_NAME + "/home");
				document.getElementById('main-content').innerHTML = html_home;
    
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
 

