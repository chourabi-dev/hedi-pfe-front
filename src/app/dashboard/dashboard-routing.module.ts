import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { DashComponent } from './dash/dash.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component:HomeComponent , children:[
    { path:"", component:DashComponent },
    { path:"dash", component:DashComponent },

    { path:'admin-users', component:EmployeesManagemenetComponent },
    { path:'admin-users-add', component:EmployeeAddComponent },
    { path:'admin-users-edit/:id', component:EmployeeEditComponent },

    
    
  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
