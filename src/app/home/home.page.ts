import { Component, OnInit } from '@angular/core';
import { Aluno } from "../alunos/pessoa";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public pessoa: Aluno[];

  constructor (public http:HttpClient){}

  ngOnInit(): void {
    this.http.get<Aluno[]>('http://gilsonpolito-api.herokuapp.com/alunos')   
    .subscribe(
       (aluno)=>{
         this.pessoa=aluno;
       }
    )   
  }

}