import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-categories-admin-list',
  templateUrl: './categories-admin-list.component.html',
  styleUrls: ['./categories-admin-list.component.css']
})
export class CategoriesAdminListComponent implements OnInit {

  categories:any[];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  



  getData(){
    this.api.getCategoriesList().toPromise().then((res:any[])=>{
      this.categories = res;
    })
  }

}
