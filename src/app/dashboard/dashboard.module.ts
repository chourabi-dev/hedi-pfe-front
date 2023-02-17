import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DashComponent } from './dash/dash.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { InteventionsComponent } from './inteventions/inteventions.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent,  EmployeesManagemenetComponent, EmployeeAddComponent, DashComponent, EmployeeEditComponent,  InteventionsComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
