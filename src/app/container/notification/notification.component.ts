import { Component, OnInit, Input } from '@angular/core';
import { NotificationModel } from 'src/app/model/notification-model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input()
  message : NotificationModel;
  constructor() { }

  ngOnInit() {
    
  }

}
