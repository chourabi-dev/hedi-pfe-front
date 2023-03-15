import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { CategoriesAdminAddComponent } from './categories-admin-add/categories-admin-add.component';
import { CategoriesAdminListComponent } from './categories-admin-list/categories-admin-list.component';
import { DashComponent } from './dash/dash.component';
import { DoctorAdminAddComponent } from './doctor-admin-add/doctor-admin-add.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorsAdminListComponent } from './doctors-admin-list/doctors-admin-list.component';
import { DoctorsComponent } from './doctors/doctors.component';

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

    { path:'doctors', component:DoctorsComponent },
    { path:'doctors-details/:id', component:DoctorDetailsComponent },
    

    { path:'admin-doctors-list', component:DoctorsAdminListComponent },
    { path:'categories-admin', component:CategoriesAdminListComponent },
    { path:'admin-category-add', component:CategoriesAdminAddComponent },
    { path:'admin-doctor-add', component:DoctorAdminAddComponent },
     
    
    
    
  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
