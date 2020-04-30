import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginFlag=false;
 alertType='';
 res='';
 alert=false;
  constructor() { }

  ngOnInit() {
  }
 login(form:NgForm){
 	console.log("form : ",form.form.value)
 	if(form.form.value.email === "kv@gmail.com" && form.form.value.password==="K@1234") {
      this.loginFlag = true
      this.alert=true
       this.alertType = 'alert alert-success background-success';
          this.res = 'Login Successful';
 	}else{
 		this.loginFlag =false
 		this.alert=true
 		this.alertType = 'alert alert-danger background-danger';
              this.res = 'Login Unsuccessful';
 	}
 }
}
