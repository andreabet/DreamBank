import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ApiService} from '../../services/api/api.service';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import { Router } from '@angular/router';
import {AccountListI} from '../../models/accountList.interface';


@Component({
  selector: 'app-detail-bank-account',
  templateUrl: './detail-bank-account.component.html',
  styleUrls: ['./detail-bank-account.component.css']
})
export class DetailBankAccountComponent implements OnInit {

  accountLis:AccountListI[] |any;

  constructor(private api:ApiService,public router: Router) { }

  ngOnInit(): void {
    this.api.getAllAccounts().subscribe(data => {
      //console.log(data);
     // debugger;
      this.accountLis=data;
    })
  }

  listTrx(id:any){
    //console.log(id);
    this.router.navigate(['listTrx',id]); 

  }

  newProduct(){
   this.router.navigate(['requesProduct']); 
  }


}
