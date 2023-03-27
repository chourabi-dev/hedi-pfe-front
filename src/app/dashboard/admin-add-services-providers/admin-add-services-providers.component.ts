import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-add-services-providers',
  templateUrl: './admin-add-services-providers.component.html',
  styleUrls: ['./admin-add-services-providers.component.css']
})
export class AdminAddServicesProvidersComponent implements OnInit {

  form = new FormGroup({
    category : new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    descreption: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
  });

  errMsg="";
  successMsg="";

  servicesProvidersCategories:any[] = [];

  servicesProvidersLocations:any[] = [];



  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getServicesCategories().toPromise().then((res:any[])=>{
      this.servicesProvidersCategories = res;
    })

    this.api.getServicesLocations().toPromise().then((res:any[])=>{
      this.servicesProvidersLocations = res;
    })
  }


  addData(){
    this.errMsg=""; 
    
    

    this.api.addServiceProvider( this.form.value  ).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Service provider account created successfully.";
        this.form.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      err.error.errors.forEach(e => {

        this.errMsg+=e.field+', '+e.defaultMessage+'\n';
      });
      
    })
  }
}
