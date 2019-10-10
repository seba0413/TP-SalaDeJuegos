import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ErrorComponent } from './componentes/error/error.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { JuegoscardComponent } from './componentes/juegoscard/juegoscard.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';



const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'Principal' , component: PrincipalComponent },
  { path: 'error' , component: ErrorComponent },
  { path: 'Jugadores' , component: JugadoresListadoComponent }, 
  { path: 'Listado' , component: ListadoDeResultadosComponent }, 
  { path: 'Juegos' , component: JuegosComponent, children:
    [
       { path: 'Adivina' , component: AdivinaElNumeroComponent },
       { path: 'Agilidad' , component: AgilidadAritmeticaComponent },
       { path: 'Tateti' , component: TatetiComponent },
       { path: 'Card' , component: JuegoscardComponent },
       { path: 'Ppt' , component: PptComponent },
       { path: 'Anagrama' , component: AnagramaComponent },
       { path: 'Preguntados' , component: PreguntadosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
