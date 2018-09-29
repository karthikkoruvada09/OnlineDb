import { Component, OnInit } from '@angular/core';
import{ Router }from'@angular/router'
import { Route } from '@angular/compiler/src/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentdata:Object={};
  branch:string="";
  check1:boolean=false;
  password:string="";
  constructor(private router:Router, private ds:ServeService) { }
  phno:string=null;
  Female:string=null;
  male:string=null;
  dob:string=null;
  email:string=null;
  cpassword:string=null;
  username:string=null;

  ngOnInit() {
  }

  student(data)
  {
    
    
    console.log(data);
    this.ds.stuRedData(data).subscribe(r=>{
      alert("successfully logged");
      this.router.navigate(['/home']);

  
  })};
}

  
