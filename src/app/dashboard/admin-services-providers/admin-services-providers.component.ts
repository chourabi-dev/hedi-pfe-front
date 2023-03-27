import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-services-providers',
  templateUrl: './admin-services-providers.component.html',
  styleUrls: ['./admin-services-providers.component.css']
})
export class AdminServicesProvidersComponent implements OnInit {

  services:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getServiceProviders().toPromise().then((res:any[])=>{
      this.services = res;
    })
  }

}
