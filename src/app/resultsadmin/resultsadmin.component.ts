import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';


@Component({
  selector: 'app-resultsadmin',
  templateUrl: './resultsadmin.component.html',
  styleUrls: ['./resultsadmin.component.css']
})
export class ResultsadminComponent implements OnInit {

  constructor(private ds:ServeService) { }

  ararr:Object;
i:any={};
b:boolean;
Branch:string=null;
Date:string=null;
name:string=null;
percentage:string=null;
searchdate:string=null;
searchbranch:string=null;


  ngOnInit()
   {
    this.ds.getData().subscribe(a=>this.ararr=a);
    console.log(this.ararr);
  }



  
  
  resAdmin(add)
  {
    console.log(add);
    this.ds.addRes(add).subscribe(r=>{
      alert(" added");
  }
    )};


    delete(v)
    {
      console.log("string recieved is"+v);
      this.ds.resultDel(v).subscribe(data=>this.ararr=data);
 
    }


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
      this.ds.updateResStud(this.i).subscribe(data=>this.ararr=data);
     
    }
 

}
