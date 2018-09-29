import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string=null;
  password:string=null;
  constructor(private router:Router,private ds:ServeService)
   { }


  ngOnInit() {
  }

  // s1:string="karthik";
  // s2:string="karthik";
  // s3:string="nandhu";
  // s4:string="nandhu";
  check:boolean=false;
  r:any;

  // username:string=null;
  // password:string=null;

  method(data)
  {
    //   if(this.s1.match(data.username)&&this.s2.match(data.password))
    //   {
    //     this.router.navigate(['logout']);
    //   }
    // else if(this.s3.match(data.username)&&this.s4.match(data.password))
    //   {
    //     this.router.navigate(['logoutstudent']);
    //   }

    this.ds.loginCheck(data).subscribe(r=>{
      console.log(r[0]);
      this.ds.setDataFromLogin(r[0]);
      if(r[0]!=null)
      {
        alert("login successfull");
        if((r[0].username).length==7)
        {
          this.router.navigate(['logout']);
        }
        else{

          this.router.navigate(['logoutstudent']);
        }
        
      }
      else{
        alert("login failed");
      }
    });

 



  }

}
