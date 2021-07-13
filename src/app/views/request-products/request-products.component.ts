import { Component, OnInit } from '@angular/core';
import {Addproduct} from '../../models/addproduct';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-products',
  templateUrl: './request-products.component.html',
  styleUrls: ['./request-products.component.css']
})
export class RequestProductsComponent implements OnInit {
  

  requestproductArray: Addproduct[] =[{
    "id":1,
    "type":"CREDITO AGIL",
    "status":"PENDIENTE",
    "monto": "10000000",
    "requestDate":"2020-03-03"
  },
  {
    "id":2,
    "type":"CREDITO AGIL",
    "status":"PENDIENTE",
    "monto": "10000000",
    "requestDate":"2020-03-03"
  }];
SelectedAddproduct: Addproduct = new Addproduct();

  constructor() { }

  ngOnInit(): void {
  }
  
  requestDate: string='';

  
  addEdit(){
    if(this.SelectedAddproduct.id===0){
      this.SelectedAddproduct.id= this.requestproductArray.length +1;
      this.SelectedAddproduct.status="PENDIENTE";
      this.requestproductArray.push(this.SelectedAddproduct);
    }
      this.SelectedAddproduct = new Addproduct();
  }
  OpenForEdit(addproduct:Addproduct)
  {
    this.SelectedAddproduct=addproduct;
  }

  deleteProduct()
  {
    if(confirm('Está seguro de eliminar el registro?'))
    {
      this.requestproductArray=this.requestproductArray.filter(x => x != this.SelectedAddproduct);
      this.SelectedAddproduct = new Addproduct();
    }
  }
}
