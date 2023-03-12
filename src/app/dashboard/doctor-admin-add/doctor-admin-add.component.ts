import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor-admin-add',
  templateUrl: './doctor-admin-add.component.html',
  styleUrls: ['./doctor-admin-add.component.css']
})
export class DoctorAdminAddComponent implements OnInit {

  form = new FormGroup({ 
    fullname : new FormControl('',Validators.required),
    phone : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required),
    about : new FormControl('',Validators.required), 
    
    
  })


  errMsg="";
  successMsg="";

  categories:any[] = [];
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCategoriesList().toPromise().then((res:any[])=>{
      this.categories = res;
    })
  }


  addData(){
    this.errMsg=""; 
    
    

    this.api.addDoctor( this.form.value  ).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Doctor created successfully.";
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
