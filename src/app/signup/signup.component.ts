import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),  
    email : new FormControl('',Validators.email),
    password : new FormControl('',Validators.required),
    
    
  })


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }




  signinNow(){
    this.errMsg="";
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email; 
    

    this.auth.signUp(username,email,password,name,'ROLE_USER').toPromise().then((res)=>{
      this.successMsg="Account created successfully";
    }).catch((err)=>{
      this.errMsg = "something went wrong, please try again";
    })
    

    
  }

}
