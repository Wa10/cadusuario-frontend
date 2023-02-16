import { PROPERTIES_API } from './../configs/properties-api';
import { Funcionario } from './../models/funcionatios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${PROPERTIES_API.URLBase}/funcionarios`);
  }

  save(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${PROPERTIES_API.URLBase}/funcionarios`,  funcionario);
  }
}
