import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ListTrxI } from 'src/app/models/listTrx.interface';
import {ApiService} from '../../services/api/api.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-list-trx',
  templateUrl: './list-trx.component.html',
  styleUrls: ['./list-trx.component.css']
})
export class ListTrxComponent implements OnInit {
  listTrx:ListTrxI[] |any;

  constructor( private activatedRoute: ActivatedRoute,private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    //console.log();
    //debugger;
     let accountId= this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getListTrx(accountId).subscribe(data => {
      //console.log(data);
      this.listTrx=data;
    })
  }

  detailTrx(sec:any){
    //console.log(id);
    this.router.navigate(['detailTrx',sec]); 

  }
}
