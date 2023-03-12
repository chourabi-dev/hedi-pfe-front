import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctors-admin-list',
  templateUrl: './doctors-admin-list.component.html',
  styleUrls: ['./doctors-admin-list.component.css']
})
export class DoctorsAdminListComponent implements OnInit {

  doctors:any[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDoctors();
  }


  getDoctors(){
    this.api.getDoctorsList().toPromise().then((res:any[])=>{
      this.doctors = res;

    })
  }

}
