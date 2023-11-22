import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usertype } from './usertype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsertypeServiceService {
  usertypesUrl: string;
  constructor(public http:HttpClient) {
    this.usertypesUrl='http://localhost:8080/types';
   }

   public findAll(): Observable<Usertype[]>{
      return this.http.get<Usertype[]>(this.usertypesUrl);
   }

   public save(user:Usertype){
    return this.http.post<Usertype>(this.usertypesUrl,user,{responseType: 'text' as 'json'});
   }

   public delete(id:String):Observable<Usertype>{
    return this.http.delete<Usertype>(this.usertypesUrl+"?id="+id);
  }

 public findById(Usertype:string | null):Observable<Usertype[]>{
  if(Usertype!=null){
    let usertypeId:string=Usertype;
    return this.http.get<Usertype[]>(this.usertypesUrl+"?id="+Usertype);
  }
  else{
    return this.http.get<Usertype[]>(this.usertypesUrl+"?id="+0);
  }
    
  }
   
}
