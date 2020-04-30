import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthGuard } from './../auth/auth.guard'

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
 flag:boolean
  constructor(private route :Router,private Auth: AuthGuard) { }
  ngOnInit() {
  }
 login(form:NgForm){
 	if(form.form.value.email === "kv@gmail.com" && form.form.value.password==="K@1234") {
      this.loginFlag = true
      this.alert=true
       this.alertType = 'alert alert-success background-success';
          this.res = 'Login Successful';
          localStorage.setItem('access_token','1rglponklnkljkjn562mnknl894n');
           this.flag = this.Auth.canActivate();
                    if(this.flag === true){
                      this.route.navigate(['notes']);
                    }else{
                      this.route.navigate(['']);
                    }
 	}else{
 		this.loginFlag =false
 		this.alert=true
 		this.alertType = 'alert alert-danger background-danger';
    this.res = 'Login Unsuccessful';
 	}
 }
}
