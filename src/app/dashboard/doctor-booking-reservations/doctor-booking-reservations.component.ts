import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-booking-reservations',
  templateUrl: './doctor-booking-reservations.component.html',
  styleUrls: ['./doctor-booking-reservations.component.css']
})
export class DoctorBookingReservationsComponent implements OnInit {

  reservations:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }



  getData(){
    this.api.getConnectedDoctorReservations().toPromise().then((res:any[])=>{
      console.log(res);

      this.reservations = res;
      
    })
  }



  acceptRequest(id){
    this.api.changeReservationsStatus(id,1).toPromise().then((res:any[])=>{
       this.getData();
      
    })
  }


  refuseRequest(id){
    this.api.changeReservationsStatus(id,2).toPromise().then((res:any[])=>{
      this.getData();
      
    })
  }

}
