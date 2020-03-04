import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Pessoa} from '../../model/pessoa.model';
import {ApiService} from '../../service/api-service.service';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html',
  styleUrls: ['./edit-pessoa.component.css']
})
export class EditPessoaComponent implements OnInit {

  pessoa: Pessoa;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let pessoaId = window.localStorage.getItem('editpessoaId');
    if (!pessoaId) {
      alert('Invalid action.');
      this.router.navigate(['list-pessoa']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      naturalidade: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      cpf: ['', Validators.required]
    });
    this.apiService.getPessoaById(+pessoaId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updatePessoa(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('pessoa updated successfully.');
            this.router.navigate(['list-pessoa']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
