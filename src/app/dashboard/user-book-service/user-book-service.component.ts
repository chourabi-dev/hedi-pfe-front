import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-book-service',
  templateUrl: './user-book-service.component.html',
  styleUrls: ['./user-book-service.component.css']
})
export class UserBookServiceComponent implements OnInit {

 
  id; 
  serviceID;


  successMsg="";
  errMsg="";

  form = new FormGroup({
    datetime : new FormControl('',Validators.required),
    descreption: new FormControl('')
  })

  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.serviceID = this.route.snapshot.params.service;  
  }



  saveData(){
    this.api.addServiceReservation(
      {
        reservationDate: this.form.value.datetime,
        descreption: this.form.value.descreption,
        service: this.serviceID,
        reservation : this.id
      }
    ).toPromise().then((res:any)=>{
      if (res.success === true) {
        this.successMsg = res.message;
        
      } else {
        this.errMsg = res.message;
        
      }
    }).catch((err)=>{
      this.errMsg="Something went wrong, please try again."
    })
  }

 
}
