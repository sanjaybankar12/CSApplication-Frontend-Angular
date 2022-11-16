import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { AdminComponent } from './admin/admin.component';

import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { ProgramComponent } from './program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlannerComponent,
    AdminComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [ DataService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
