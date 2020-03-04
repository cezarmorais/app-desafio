import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Pessoa} from '../../model/pessoa.model';
import {ApiService} from '../../service/api-service.service';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})
export class ListPessoaComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getPessoas()
      .subscribe( data => {
        this.pessoas = data.result;
      });
  }

  deletePessoa(pessoa: Pessoa): void {
    this.apiService.deletePessoa(pessoa.id)
      .subscribe( data => {
        this.pessoas = this.pessoas.filter(u => u !== pessoa);
      });
  }

  editPessoa(pessoa: Pessoa): void {
    window.localStorage.removeItem('editpessoaId');
    window.localStorage.setItem('editpessoaId', pessoa.id.toString());
    this.router.navigate(['edit-pessoa']);
  }

  addPessoa(): void {
    this.router.navigate(['add-pessoa']);
  }
}
