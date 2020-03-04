import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pessoa} from '../model/pessoa.model';
import {Observable} from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/pessoas/';

  login(loginPayload): Observable<any> {
    return this.http.post<any>('http://localhost:8080/' + 'oauth/token', loginPayload);
  }

  getPessoas(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPessoaById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  createPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.post<any>(this.baseUrl, pessoa);
  }

  updatePessoa(pessoa: Pessoa): Observable<any> {
    return this.http.put<any>(this.baseUrl + pessoa.id, pessoa);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}