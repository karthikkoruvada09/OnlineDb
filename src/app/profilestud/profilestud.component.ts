import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-profilestud',
  templateUrl: './profilestud.component.html',
  styleUrls: ['./profilestud.component.css']
})
export class ProfilestudComponent implements OnInit {

  constructor(private ds:ServeService) { }

  r:any;
  check1:boolean=false;
  password:string=null;
  cpassword:string=null;
  ngOnInit() {
    this.r= this.ds.getDataToPro();
    console.log(this.r);

  }

  studentUpd()
  {
   
    console.log(this.r);
    this.ds.stuproUpdate(this.r).subscribe(data=>{
      alert("successfully updated");
      
    })
    
    
   
  }

}
