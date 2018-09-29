import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  r:any;
  constructor(private hc:HttpClient)
   { 

   }
   dataserve:Object={};

   getData():Observable<any>
   {
    return this.hc.get('/logout/resultadmin');
   }

   setDataFromLogin(r):any
   {
     this.r=r;
     console.log(r);

   }

   getDataToPro():any{
     return this.r;
   }

   

   otherData():Observable<any>
   {
    return this.hc.get('/logout/notiadmin');
   }

   adminRedData(data):Observable<any>
   {
    
     console.log(data);
     return this.hc.post('/home/admin',data);
   }


   stuRedData(data):Observable<any>
   {
    
     console.log(data);
     return this.hc.post('/home/student',data);
   }

   addNoti(add):Observable<any>
   {

    console.log(add);
     return this.hc.post('/logout/notiadmin',add);
   }


   addRes(add):Observable<any>
   {

    console.log(add);
     return this.hc.post('/logout/resultadmin',add);
   }


   delData(id):Observable<any>
   {

    console.log(id);
     return this.hc.delete('/logout/notiadmin/'+id);
   }

   updateData(i):Observable<any>
   {
     console.log(i);
     return this.hc.put('/logout/notiadmin',i);
   }


   loginCheck(data):Observable<any>
   {
    return this.hc.post('/home/login',data);
   }


   resultDel(id):Observable<any>
   {
     console.log(id)
     return  this.hc.delete('/logout/resultadmin/'+id);
     
   }
 

   updateResStud(i):Observable<any>
   {
    
      console.log(i);
      return this.hc.put('/logout/resultadmin',i);
    
   }


   proUpdate(k):Observable<any>
   {
    console.log(k);
     return this.hc.put('/logout/proadmin',k);
   }

   stuproUpdate(k)
   {
     
    console.log(k);
    return this.hc.put('/logoutstudent/prostu',k);
   }
  
} 
