import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-resultsstud',
  templateUrl: './resultsstud.component.html',
  styleUrls: ['./resultsstud.component.css']
})
export class ResultsstudComponent implements OnInit {

  searchdate:string=null;
  constructor(private ds:ServeService) { }
  srarr:Object;
  ngOnInit() {
    this.ds.getData().subscribe(a=>this.srarr=a);
    console.log(this.srarr);
  }

}
