import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Program } from '../model/program.model';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  programs:Program[] = [];

  constructor(private dataService:DataService, private router:Router) { 

  }

  ngOnInit() {
    var username = sessionStorage.getItem("username");
    if(username == null || username == undefined) {
      this.router.navigateByUrl("/login");
    } else {
      this.dataService.getUserPrograms(username).subscribe((nextVal:any) => this.programs = nextVal);
    }
  }

  editData(cardData:Program) {
    var username = sessionStorage.getItem("username");
    if(!username) {
      this.router.navigateByUrl("/login");
    } 
    //this.router.navigate(["/program",cardData]);
  }
}
