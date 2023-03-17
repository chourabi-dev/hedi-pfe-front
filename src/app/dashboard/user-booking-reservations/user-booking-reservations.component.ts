import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-booking-reservations',
  templateUrl: './user-booking-reservations.component.html',
  styleUrls: ['./user-booking-reservations.component.css']
})
export class UserBookingReservationsComponent implements OnInit {

  reservations:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }



  getData(){
    this.api.getConnectedUserReservations().toPromise().then((res:any[])=>{
      console.log(res);

      this.reservations = res;
      
    })
  }


}
