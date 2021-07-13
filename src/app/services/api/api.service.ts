import { Injectable } from '@angular/core';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import {AccountListI} from '../../models/accountList.interface'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {ListTrxI} from '../../models/listTrx.interface';
import { identifierName } from '@angular/compiler';
import {DetailTrxI} from '../../models/detailTrx.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string="http://localhost:3000/";

  constructor(private http:HttpClient){}//, private cookies: CookieService) { }

  LoginEmail( form:LoginI):Observable<ResponseI>{
    console.log();
    debugger;
    let rout = this.url +"login";
    return this.http.post<ResponseI>(rout,form);
    
  }

  getAllAccounts():Observable<AccountListI[]>{
    let rout = this.url +"accountList";
    return this.http.get<AccountListI[]>(rout);
  }

  getListTrx(id:any):Observable<ListTrxI[]>{
    let rout = this.url +"listTrx?id="+id;
    return this.http.get<ListTrxI[]>(rout);
  }
  getdetailTrx(sec:any):Observable<DetailTrxI[]>{
    let rout = this.url +"detailTrx?sec="+sec;
    return this.http.get<DetailTrxI[]>(rout);
  }

  /*setToken(token: string) {
    console.log();
    debugger;
    this.cookies.set("token",token);
  }
  getToken() {
    console.log();
    debugger;
    return this.cookies.get("token");
  }
  */
}