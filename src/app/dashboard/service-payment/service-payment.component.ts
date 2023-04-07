import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-service-payment',
  templateUrl: './service-payment.component.html',
  styleUrls: ['./service-payment.component.css']
})
export class ServicePaymentComponent implements OnInit {

  reservations:any[] = [];


  reservation = null;

  id =null;



  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getData();
  }



  getData(){
    this.api.getConnectedUserReservations().toPromise().then((res:any[])=>{
      console.log(res);

      this.reservations = res;


      this.reservations.map((tmp)=>{
        if (tmp.id == this.id) {
          this.reservation = tmp;
        }
      })
      

      
    })
  }

}
