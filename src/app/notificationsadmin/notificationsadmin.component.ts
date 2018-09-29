import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-notificationsadmin',
  templateUrl: './notificationsadmin.component.html',
  styleUrls: ['./notificationsadmin.component.css']
})
export class NotificationsadminComponent implements OnInit {

  constructor(private ds:ServeService) 
  {

   }


   
i:any={};
b:boolean;
   r:any;
   f:any;
   srarr:any;
  ngOnInit()
   {
    this.ds.otherData().subscribe(a=>this.srarr=a);
    console.log(this.srarr);
  }

  // delete(x:Number)
  // {
  //   this.srarr.splice(x,1);
  // }
  notiadmin(add)
  {
    console.log(add);
    this.ds.addNoti(add).subscribe(r=>{
      alert(" added")
    }
   )};


   delete(v)
   {
     console.log("string recieved is"+v);
     this.ds.delData(v).subscribe(data=>this.srarr=data);

   }

   searchbranch:string=null;
   searchdate:string=null;
   Notification:string=null;
   Branch:string=null;
   Date:string=null;

   edit(obj)
   {
     this.i=obj;
     this.b=true;

     console.log(obj);




   }

   update()
   {
    this.b=false;
     console.log(this.i);
     this.ds.updateData(this.i).subscribe(data=>this.srarr=data);
    
   }

}


