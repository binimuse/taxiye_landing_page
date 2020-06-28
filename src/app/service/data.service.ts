import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private single_news_to_view = new BehaviorSubject <object>(null);
  currentMessage = this.single_news_to_view.asObservable();
  constructor() { }
  changedata(value){
    this.single_news_to_view.next(value);
  }
}

