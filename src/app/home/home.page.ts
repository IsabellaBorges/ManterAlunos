import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Aluno } from "../alunos/pessoa";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { PessoasService } from '../provider/pessoas.service';
=======
import { Aluno } from '../alunos/pessoa';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AlertController, LoadingController, NavController  } from '@ionic/angular';
import { PessoasService } from '../provider/pessoas.service';
import { NavigationExtras } from '@angular/router';
>>>>>>> 40694fc6704cb46eced8ed3417a7803734bcf7ed

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public pessoa: Aluno[];

  constructor (private alertCtrl:AlertController,
              private loadingCtrl:LoadingController,
<<<<<<< HEAD
              private pessoasService:PessoasService){}
=======
              private pessoasService:PessoasService,
              private navCtrl: NavController){}
>>>>>>> 40694fc6704cb46eced8ed3417a7803734bcf7ed

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
<<<<<<< HEAD
}
=======

  selecionaAluno(aluno: Aluno){
    console.log('Aluno selecionado: ' + aluno.nome);

    let extras: NavigationExtras = {
      queryParams:{
        alunoselecionado: JSON.stringify(aluno)
      }
    };

    this.navCtrl.navigateForward(['escolha'], extras);
  }

}



>>>>>>> 40694fc6704cb46eced8ed3417a7803734bcf7ed
