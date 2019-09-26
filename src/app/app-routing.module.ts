import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ErrorComponent } from './componentes/error/error.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { JuegoscardComponent } from './componentes/juegoscard/juegoscard.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';



const routes: Routes = [
  { path: '' , component: PrincipalComponent },
  { path: 'Principal' , component: PrincipalComponent },
  { path: 'error' , component: ErrorComponent },
  { path: 'Jugadores' , component: JugadoresListadoComponent }, 
  { path: 'Juegos' , component: JuegosComponent, children:
    [
       { path: 'Adivina' , component: AdivinaElNumeroComponent },
       { path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent },
       { path: 'Agilidad' , component: AgilidadAritmeticaComponent },
       { path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent },
       { path: 'Tateti' , component: TatetiComponent },
       { path: 'Card' , component: JuegoscardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
