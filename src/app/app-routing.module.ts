import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { AdminComponent  } from './admin/admin.component';
import { ProgramComponent } from './program/program.component';

import { LogoutGuard } from './logout.guard';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent        
    },
    {
        path:'planner',
        component:PlannerComponent        
    },
    {
        path:'admin',
        component:AdminComponent        
    },
    {
      path:'program',
      component:ProgramComponent        
    },
    {
      path:'logout',
      component:LoginComponent,
      canActivate:[LogoutGuard]      
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
