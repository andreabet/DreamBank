import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {PrincipalComponent} from './views/principal/principal.component';
import {DetailBankAccountComponent} from './views/detail-bank-account/detail-bank-account.component';
import {DetailTrxComponent} from './views/detail-trx/detail-trx.component';
import {ListTrxComponent} from './views/list-trx/list-trx.component';
import {RequestProductsComponent} from './views/request-products/request-products.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'detailBankAccount', component:DetailBankAccountComponent},
  {path:'detailTrx/:sec',component:DetailTrxComponent},
  {path:'listTrx/:id',component:ListTrxComponent},
  {path:'requesProduct',component:RequestProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,PrincipalComponent,
  DetailBankAccountComponent,DetailTrxComponent,ListTrxComponent,RequestProductsComponent];
