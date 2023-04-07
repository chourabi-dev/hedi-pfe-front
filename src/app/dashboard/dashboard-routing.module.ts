import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { AdminAddServicesProvidersComponent } from './admin-add-services-providers/admin-add-services-providers.component';
import { AdminServicesProvidersComponent } from './admin-services-providers/admin-services-providers.component';
import { CategoriesAdminAddComponent } from './categories-admin-add/categories-admin-add.component';
import { CategoriesAdminListComponent } from './categories-admin-list/categories-admin-list.component';
import { DashComponent } from './dash/dash.component';
import { DoctorAdminAddComponent } from './doctor-admin-add/doctor-admin-add.component';
import { DoctorBookingReservationsComponent } from './doctor-booking-reservations/doctor-booking-reservations.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorsAdminListComponent } from './doctors-admin-list/doctors-admin-list.component';
import { DoctorsComponent } from './doctors/doctors.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { HomeComponent } from './home/home.component';
import { ServicePaymentComponent } from './service-payment/service-payment.component';
import { ServiceProviderBookingRequestComponent } from './service-provider-booking-request/service-provider-booking-request.component';
import { UserBookServiceComponent } from './user-book-service/user-book-service.component';
import { UserBookingPaymentAndServicesComponent } from './user-booking-payment-and-services/user-booking-payment-and-services.component';
import { UserBookingReservationsComponent } from './user-booking-reservations/user-booking-reservations.component';
import { UserTripManagementComponent } from './user-trip-management/user-trip-management.component';
import { AdminManageTripsComponent } from './admin-manage-trips/admin-manage-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
 
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


    { path:'admin-services-providers', component:AdminServicesProvidersComponent }, 
    { path:'admin-add-services-providers', component:AdminAddServicesProvidersComponent },
    
    { path:'admin-manage-trips', component:AdminManageTripsComponent },
    
    { path:'trip-details/:id', component:TripDetailsComponent },
    
 
    
    { path:'booking-requests', component:DoctorBookingReservationsComponent },
   
    { path:'my-booking-requests', component:UserBookingReservationsComponent },
   

    { path:'my-booking-requests/payment-services/:id', component:UserBookingPaymentAndServicesComponent },
   
    { path:'my-booking-requests/payment-services/:id/add-service/:service', component:UserBookServiceComponent },
   
    { path:'reservation-payment/:id', component:ServicePaymentComponent },
   
    { path:'service-provider-booking-requests', component:ServiceProviderBookingRequestComponent },
   

    { path:'manage-my-trip/:id', component:UserTripManagementComponent },
   


    
    
    
  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
