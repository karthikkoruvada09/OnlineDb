import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
import { Route } from '@angular/router';


@Component({
  selector: 'app-profileadmin',
  templateUrl: './profileadmin.component.html',
  styleUrls: ['./profileadmin.component.css']
})
export class ProfileadminComponent implements OnInit {
  
  x:object={};
  r:any={};
  password:string=null;
  cpassword:string=null;

  constructor(private ds:ServeService) { }
check1:boolean=false;
  ngOnInit() {

   this.r= this.ds.getDataToPro();
    console.log(this.r);

  }

 

  adminPro()
   {
    
     console.log(this.r);
     this.ds.proUpdate(this.r).subscribe();
     
     
    
   }

  }
