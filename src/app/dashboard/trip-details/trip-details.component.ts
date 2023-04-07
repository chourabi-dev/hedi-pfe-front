import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {


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


  closeService(id){
      this.api.closeServiceStatus(id).toPromise().then((res)=>{
        this.getData();
      })
  }

  closeTrip(){
    this.api.closeReservation(this.reservation.id).toPromise().then((res)=>{
      this.getData();
    })
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

      console.log(data);
      

      // now get services in the same location !!

      this.api.getBookedServiceInThisTrip(data.id).toPromise().then((res:any[])=>{
        console.log(res);
        
        this.services = res;
      })


    })
    
  }
}
