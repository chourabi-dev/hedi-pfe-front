import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-booking-payment-and-services',
  templateUrl: './user-booking-payment-and-services.component.html',
  styleUrls: ['./user-booking-payment-and-services.component.css']
})
export class UserBookingPaymentAndServicesComponent implements OnInit {

  services:any[] = [];
  locations:any[] = [];
  categories:any[] = [];

  id;

  reservation = null;


  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getData();
  }


  getData(){
    this.api.getServicesCategories().toPromise().then((res:any[])=>{
      this.categories = res;
    })
    

    this.api.getServicesLocations().toPromise().then((res:any[])=>{
      this.locations = res;
    })

    this.api.getReservationByID(this.id).toPromise().then((data:any)=>{
      this.reservation = data;


      // now get services in the same location !!

      this.api.getServiceProvidersByDoctorLocation(data.doctor.location.id).toPromise().then((res:any[])=>{
        this.services = res;
      })


    })
    
  }

}
