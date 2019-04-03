import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
<<<<<<< HEAD
=======
  { path: 'escolha', loadChildren: './escolha/escolha.module#EscolhaPageModule' },

>>>>>>> 40694fc6704cb46eced8ed3417a7803734bcf7ed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
