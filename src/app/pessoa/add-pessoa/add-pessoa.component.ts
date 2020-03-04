import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api-service.service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.css']
})
export class AddPessoaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      naturalidade: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      cpf: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createPessoa(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-pessoa']);
      });
  }

}
