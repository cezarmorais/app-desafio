import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListPessoaComponent } from './pessoa/list-pessoa/list-pessoa.component';
import { AddPessoaComponent } from './pessoa/add-pessoa/add-pessoa.component';
import { EditPessoaComponent } from './pessoa/edit-pessoa/edit-pessoa.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './service/api-service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';
import { NavBarComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListPessoaComponent,
    AddPessoaComponent,
    EditPessoaComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
