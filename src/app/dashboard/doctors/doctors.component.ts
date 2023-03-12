import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  serachForm = new FormGroup({
    category: new FormControl('',Validators.required),
    doctorName: new FormControl(''),
    
  })


  categories:any[] = [];
  

  doctors:any[] = [];
  


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCategoriesList().toPromise().then((res:any[])=>{
      this.categories = res;
    })
  }


  searchFor(){
    this.api.getDoctorsByCategoryAndName(this.serachForm.value.category,this.serachForm.value.doctorName).toPromise().then((doctors:[])=>{
      this.doctors = doctors;

      console.log(this.doctors);
      
    })
  }
}
