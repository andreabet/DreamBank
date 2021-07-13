import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ApiService} from '../../services/api/api.service';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, public router: Router) { }

  errorStatus: boolean = false;
  errorMsg: any="";

  ngOnInit(): void {
    this.CheckLocalStorage();
  }
  CheckLocalStorage()
  {
    if(localStorage.getItem('token')){
      this.router.navigate(['principal']);
    }
  }


  onLogin(form:LoginI){
   // console.log();
    this.api.LoginEmail(form).subscribe(data => {
     //debugger;
     let dataResponse: ResponseI =data;
      //this.api.setToken(data.token);
     // this.api.getToken();
      //this.api.setToken(data.token);
      //console.log(data);
      if(dataResponse.status=="ok"){
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['principal']);
      }else{
        this.errorStatus = true;
        this.router.navigate(['principal']);
        this.errorMsg = "Password incorrecto o usuario no registrado";
      }
    })
   }

}
