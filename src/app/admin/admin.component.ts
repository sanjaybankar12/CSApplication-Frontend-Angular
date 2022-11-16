import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { Program } from '../model/program.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  programs:Program[]=[];

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit() {
    var username = sessionStorage.getItem("username");
    if(!username) {
      this.router.navigateByUrl("/login");
    }
    this.dataService.getPrograms().subscribe((nextVal:any) => this.programs = nextVal);
  }

  approveProgram(programId:number|any) {
      this.dataService.approveProgram(programId);
      this.dataService.getPrograms().subscribe((nextVal:any) => this.programs = nextVal);
  }

  rejectProgram(programId:number|any) {
    this.dataService.rejectProgram(programId);
    this.dataService.getPrograms().subscribe((nextVal:any) => this.programs = nextVal);
  }

}
