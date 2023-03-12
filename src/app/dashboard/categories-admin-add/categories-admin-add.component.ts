import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-categories-admin-add',
  templateUrl: './categories-admin-add.component.html',
  styleUrls: ['./categories-admin-add.component.css']
})
export class CategoriesAdminAddComponent implements OnInit {
  form = new FormGroup({
    label : new FormControl('',Validators.required)
  })


  errMsg="";
  successMsg="";

  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }


  addData(){
    this.errMsg="";
    const label = this.form.value.label; 
    
    
    

    this.api.addCategory( {label:label} ).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Category created successfully.";
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
