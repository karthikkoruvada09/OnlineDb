import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-notificationsstud',
  templateUrl: './notificationsstud.component.html',
  styleUrls: ['./notificationsstud.component.css']
})
export class NotificationsstudComponent implements OnInit {

  constructor(private ds:ServeService) { }
arr:any;
searchdate:string=null;
  ngOnInit()
   {
    this.ds.otherData().subscribe(a=>this.arr=a);
    console.log(this.arr);
  }

 
}
