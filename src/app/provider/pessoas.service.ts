import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../alunos/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

<<<<<<< HEAD
  constructor(private http:HttpClient) { }
=======
  constructor(private http: HttpClient) { }
>>>>>>> 40694fc6704cb46eced8ed3417a7803734bcf7ed

  lista(){
    return this.http.get<Aluno[]>('http://gilsonpolito-api.herokuapp.com/alunos');
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 40694fc6704cb46eced8ed3417a7803734bcf7ed
