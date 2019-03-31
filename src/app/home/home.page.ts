import { Component, OnInit } from '@angular/core';
import { Aluno } from "../alunos/pessoa";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { PessoasService } from '../provider/pessoas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public pessoa: Aluno[];

  constructor (private alertCtrl:AlertController,
              private loadingCtrl:LoadingController,
              private pessoasService:PessoasService){}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: "Aguarde enquanto os dados são carregados."
    });
    await loading.present();

    this.pessoasService.lista()
    .subscribe(
       (aluno)=>{
         this.pessoa=aluno;
       },
        async (err: HttpErrorResponse)=>{
          console.log("Erro" + err.status);
          const al = await this.alertCtrl.create({
            header: "Erro",
            message: "Erro ao listar os alunos.",
            buttons: [{text: "OK"}]
          });
        await al.present();
      }
    ).add(
      ()=>{
        loading.dismiss();
      }
    ) 
  }
}