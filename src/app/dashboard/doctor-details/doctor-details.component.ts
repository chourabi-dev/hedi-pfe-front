import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  form = new FormGroup({
    reservationDate : new FormControl('',Validators.required),
    privateNote : new FormControl('',Validators.required)
  })

  showSendForm = false;


  
  errMsg="";
  successMsg="";

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



  showForm(){
    this.showSendForm = true;
  }



  save(){
    

    this.api.bookDoctor( this.form.value , this.id ).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Request sent successfully.";
        this.form.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      this.errMsg="Something went wrong, please try again.";
      
    })
  }



}
