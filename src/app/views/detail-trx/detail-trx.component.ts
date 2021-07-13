import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DetailTrxI } from 'src/app/models/detailTrx.interface';
import {ApiService} from '../../services/api/api.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-trx',
  templateUrl: './detail-trx.component.html',
  styleUrls: ['./detail-trx.component.css']
})
export class DetailTrxComponent implements OnInit {

  detailTrx:DetailTrxI[] |any;
 
  constructor( private activatedRoute: ActivatedRoute,private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    console.log();
    debugger;
     let accountId= this.activatedRoute.snapshot.paramMap.get('sec');

    this.api.getdetailTrx(accountId).subscribe(data => {
      //console.log(data);
      this.detailTrx=data;
    })
  }
}
