import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {


  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),  
    email : new FormControl('',Validators.email),
    role: new FormControl('user',Validators.required),
    
    
  })


  constructor(private auth:AuthService,private router:Router, private api:ApiService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.getEmployeeDetails();
  }


  getEmployeeDetails(){
    const idEmp = this.route.snapshot.params.id;

    this.api.getEmployeesList().subscribe((data:any)=>{
      var employees = data;

      console.log(data);
      

      for (let i = 0; i < employees.length; i++) {
        const e = employees[i];

        if (e.id == idEmp) {
          let employee = e;
          
          delete employee.id;
          console.log(employee);

          const roleName = employee.roles[0].name;
          
          if (roleName == 'ROLE_ADMIN') {
            employee.role = 'admin';
          }else if( roleName == 'ROLE_PM' ){
            employee.role = 'pm';
          }else if( roleName == 'ROLE_USER' ){
            employee.role = 'user';
          }

          delete employee.roles;
          

          this.signinForm.setValue(employee);
        }
        
      }


    })
  }




  signinNow(){
    const idEmp = this.route.snapshot.params.id;
    this.errMsg="";
    const username = this.signinForm.value.username;
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email; 
    const role = this.signinForm.value.role;
    
    
    

    this.auth.updateAccount(username,email,name,role,idEmp).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Account updated successfully.";
        this.signinForm.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      
      
    })

    
  }

}
