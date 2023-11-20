import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../app/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class UserServiceService {
   usersUrl: string;
  constructor(public http:HttpClient) {
    this.usersUrl='http://localhost:8080/users';
   }

   public findAll(): Observable<User[]>{
      return this.http.get<User[]>(this.usersUrl);
   }

   public save(user:User){
    return this.http.post<User>(this.usersUrl,user,{responseType: 'text' as 'json'});
   }
}
