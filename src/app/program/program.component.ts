import { Component, OnInit,OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Program } from '../model/program.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  program:Program;
  activities:Program[];
  description:string;
  title:string;
  duedate:string;

  errTitle:string="";
  errDisc:string="";
  errDt:string="";
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    var username = sessionStorage.getItem("username");
    if(!username) {
      this.router.navigateByUrl("/login");
    } 

    this.activatedRoute.params.subscribe((nextVal:any) => this.program = nextVal);
    console.log(this.program);
    this.dataService.getActivities().subscribe((nextVal:any) => this.activities = nextVal);
  }

  createProgram(programForm:Program) {
    this.clearData();
    if(!this.validateInput(programForm)) {
      return;
    }
    programForm.activityId = +programForm.activityId;
    console.log(programForm);
    var username = sessionStorage.getItem("username");
    if(!username) {
      this.router.navigateByUrl("/login");
    } else {
      programForm.username = username;
      this.dataService.createProgram(programForm);
      this.clearData();
    }
    
  }

  ngOnDestroy() {
  }

  validateInput(programForm:Program) :boolean {
      var isValid = true;
      if(!programForm.activityId) {
        this.errTitle="select activity";
        isValid = false;
      }
      if(!programForm.description) {
        this.errDisc="Enter description";
        isValid = false;
      }
      if(!programForm.duedate) {
        this.errDt="Select due date";
        isValid = false;
      }
      return isValid;
  }

  clearData() {
    this.errTitle="";
    this.errDt="";
    this.errDisc="";
  }
}
