import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  role:string;
  user:User;

  errorMsg:string;
  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.username="";
    this.password="";
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
