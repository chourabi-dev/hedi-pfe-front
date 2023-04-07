import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-manage-trips',
  templateUrl: './admin-manage-trips.component.html',
  styleUrls: ['./admin-manage-trips.component.css']
})
export class AdminManageTripsComponent implements OnInit {

  reservations:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }



  getData(){
    this.api.getAllReservations().toPromise().then((res:any[])=>{
   
      this.reservations = res;
      
    })
  }

}
