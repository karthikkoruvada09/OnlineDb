import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admindata:Object;

  check:boolean=false;

  cpassword:string=null;
  dob:string=null;
  email:string=null;
  username:string=null;
  password:string=null;
  phno:string=null;
  Female:string=null;
  Male:string=null;

  

  constructor(private rou:Router,private ds:ServeService) { }
male:string=null;

  ngOnInit() {

  }
  admin(data)
  {
    // this.admindata=data;
    this.rou.navigate(['/home/success']);
    console.log(data);
    this.ds.adminRedData(data).subscribe(r=>{
      alert("successfully logged");
      this.rou.navigate(['/home']);
    });
  }
  
  

    
    
  }


