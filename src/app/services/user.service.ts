import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HOST } from '../constants/cs.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

   getUser(username:string) {
     return this.http.get(HOST+"/users/"+username);
   }

}
