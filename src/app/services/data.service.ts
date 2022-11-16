import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { HOST } from '../constants/cs.constant';
import { Program } from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http:HttpClient, private router:Router) { }

  getUserPrograms(username:string) {
    return this.http.get(HOST+"/programs/"+username);
  }

  getPrograms() {
    return this.http.get(HOST+"/programs");
  }

  getActivities() {
    return this.http.get(HOST+"/activities");
  }
  
  createProgram(programForm: Program) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    this.http.post(HOST+"/programs",programForm,options).subscribe(
      res =>{
        this.router.navigateByUrl("/planner");
          //console.log(res);
      },
      err => {
          //console.log(err.message);
      }
  );
  }

  approveProgram(id:number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let program : Program = {id:id,status:"YES"};
    this.http.put(HOST+"/programs",program,options).subscribe(
      res =>{
        this.router.navigateByUrl("/admin");
          //console.log(res);
      },
      err => {
          //console.log(err.message);
      }
  );
  }

  rejectProgram(id:number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let program : Program = {id:id,status:"NA"};
    this.http.put(HOST+"/programs",program,options).subscribe(
      res =>{
        this.router.navigateByUrl("/admin");
          //console.log(res);
      },
      err => {
          //console.log(err.message);
      }
    );
  }
}

