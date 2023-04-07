import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-service-provider-booking-request',
  templateUrl: './service-provider-booking-request.component.html',
  styleUrls: ['./service-provider-booking-request.component.css']
})
export class ServiceProviderBookingRequestComponent implements OnInit {

  reservations:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.connectedServiceProviderReservations().toPromise().then((res:any[])=>{
      this.reservations = res;
      console.log(res);
      
    })
  }

}
