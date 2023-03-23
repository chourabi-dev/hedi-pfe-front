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
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsAdminListComponent } from './doctors-admin-list/doctors-admin-list.component';
import { CategoriesAdminListComponent } from './categories-admin-list/categories-admin-list.component';
import { CategoriesAdminAddComponent } from './categories-admin-add/categories-admin-add.component';
import { DoctorAdminAddComponent } from './doctor-admin-add/doctor-admin-add.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorBookingReservationsComponent } from './doctor-booking-reservations/doctor-booking-reservations.component';
import { UserBookingReservationsComponent } from './user-booking-reservations/user-booking-reservations.component';
import { AdminServicesProvidersComponent } from './admin-services-providers/admin-services-providers.component';
import { AdminAddServicesProvidersComponent } from './admin-add-services-providers/admin-add-services-providers.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent,  EmployeesManagemenetComponent, EmployeeAddComponent, DashComponent, EmployeeEditComponent,  InteventionsComponent, DoctorsComponent, DoctorsAdminListComponent, CategoriesAdminListComponent, CategoriesAdminAddComponent, DoctorAdminAddComponent, DoctorDetailsComponent, DoctorBookingReservationsComponent, UserBookingReservationsComponent, AdminServicesProvidersComponent, AdminAddServicesProvidersComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
