import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';



const routes: Routes = [
  { path: '' , component: PrincipalComponent },
  { path: 'Principal' , component: PrincipalComponent },
  { path: 'Juegos' , component: JuegosComponent, children:
    [
       { path: 'Adivina' , component: AdivinaElNumeroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
