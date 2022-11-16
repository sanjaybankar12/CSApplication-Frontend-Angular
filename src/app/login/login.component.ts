import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { EMPTY_STRING } from './../constants/cs.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = EMPTY_STRING;
  password:string = EMPTY_STRING;
  role:string = EMPTY_STRING;
  user:User;

  errorMsg:string = EMPTY_STRING;
  constructor(private router: Router, private userService:UserService) {
      this.user = {
        username: EMPTY_STRING,
        password: EMPTY_STRING,
        role:EMPTY_STRING
      };
   }

  ngOnInit() {
    this.username = EMPTY_STRING;
    this.password = EMPTY_STRING;
    this.role = "PLANNER";
  }

  onClickSubmit(formData:User) {
    this.errorMsg ="";
    this.userService.getUser(formData.username).subscribe((nextVal:any) => {
      this.user = nextVal;
      console.log(this.user);
      if(!this.user) {
        this.errorMsg ="username does not exists";
        return;
      }
      if(this.validateUser(formData,this.user)) {
        sessionStorage.setItem("username",formData.username);
        if(formData.role == "PLANNER") {
          this.router.navigateByUrl('planner');
        } else {
          this.router.navigateByUrl('admin');
        }
      } else {
        this.errorMsg = "user details does not match";
        return;
      }
    });    
    this.clearData();
  }

  clearData() {
    this.username="";
    this.password="";
    this.role = "PLANNER";
  }

  validateUser(formData:User,user:User) : boolean {
      return (user.role == formData.role) && (user.password == formData.password);
  }

}
