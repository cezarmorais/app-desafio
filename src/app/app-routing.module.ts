import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListPessoaComponent } from './pessoa/list-pessoa/list-pessoa.component';
import { AddPessoaComponent } from './pessoa/add-pessoa/add-pessoa.component';
import { EditPessoaComponent } from './pessoa/edit-pessoa/edit-pessoa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-pessoa', component: AddPessoaComponent },
  { path: 'list-pessoa', component: ListPessoaComponent },
  { path: 'edit-pessoa', component: EditPessoaComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
