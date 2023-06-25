import { CartaComponent } from './pages/lista/carta/carta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { GestionComponent } from './pages/gestion/gestion.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"lista", component:ListaComponent},
  {path:"gestion", component:GestionComponent},
  {path:"lista/:id", component:CartaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
