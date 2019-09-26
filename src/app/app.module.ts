import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { JuegoscardComponent } from './componentes/juegoscard/juegoscard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TatetiComponent } from './componentes/tateti/tateti.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabeceraComponent,
    JuegosComponent,
    MenuComponent,
    AdivinaElNumeroComponent,
    AdivinaMasListadoComponent,
    ListadoDeResultadosComponent,
    AgilidadAritmeticaComponent,
    AgilidadMasListadoComponent,
    AnagramaComponent,
    ErrorComponent,
    InputJugadoresComponent,
    JugadoresListadoComponent,
    JuegoscardComponent,
    TatetiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
