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

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabeceraComponent,
    JuegosComponent,
    MenuComponent,
    AdivinaElNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
