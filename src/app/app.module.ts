import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DetailBankAccountComponent } from './views/detail-bank-account/detail-bank-account.component';
import { ListTrxComponent } from './views/list-trx/list-trx.component';
import { DetailTrxComponent } from './views/detail-trx/detail-trx.component';
import { RequestProductsComponent } from './views/request-products/request-products.component';
/*import { LoginComponent } from './views/login/login.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { NewComponent } from './views/new/new.component';
import { EditComponent } from './views/edit/edit.component';*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    DetailBankAccountComponent,
    ListTrxComponent,
    DetailTrxComponent,
    RequestProductsComponent
   /* LoginComponent,
    PrincipalComponent,
    NewComponent,
    EditComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
