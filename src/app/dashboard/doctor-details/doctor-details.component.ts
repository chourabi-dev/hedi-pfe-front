import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  id;

  doctor:any = null;

  constructor(private route:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
  
    this.getData();
  }



  getData(){
    this.api.getDoctorsByID(this.id).toPromise().then((doc:any)=>{
      console.log(doc);

      this.doctor = doc;
      
    })
  }





}
