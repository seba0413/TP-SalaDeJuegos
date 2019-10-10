import { Component, OnInit } from '@angular/core';
import { Jugada } from 'src/app/models/jugada';
import { JugadaService } from 'src/app/services/jugada.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  imagenPiedra: string;
  imagenPapel: string;
  imagenTijera: string; 
  elementoAsignado: string; 
  elementoSeleccionado: string;
  textoResultado: string;
  ocultarNuevoJuego: boolean;
  ocultarElementos: boolean; 
  ocultarResultados: boolean;  
  jugada: Jugada;

  constructor(private jugadaService: JugadaService) {
    this.imagenPiedra = "./assets/imagenes/piedra.jpg";
    this.imagenPapel = "./assets/imagenes/papel.jpg";
    this.imagenTijera = "./assets/imagenes/tijera.jpg";

    this.ocultarNuevoJuego = false; 
    this.ocultarElementos = true;
    this.ocultarResultados = true; 

    localStorage.setItem('juego', 'piedra, papel o tijera');

  }

   NuevoJuego() {

    this.ocultarNuevoJuego = true;
    this.ocultarElementos = false;
 }
  

  asignarElemento(elementoSeleccionado: string){

    this.elementoSeleccionado = elementoSeleccionado;
    var numero = Math.floor((Math.random() * 100));

    if(numero > 66)
        this.elementoAsignado = this.imagenPiedra;
    else if (numero > 33)
        this.elementoAsignado = this.imagenPapel;
    else
        this.elementoAsignado = this.imagenTijera;

    this.verificar(elementoSeleccionado);    

    this.ocultarElementos = true; 
    this.ocultarResultados = false; 

  }

  verificar(elementoSeleccionado: string) {
    switch(elementoSeleccionado)
    {
      case 'piedra':
        this.elementoSeleccionado = this.imagenPiedra;

        if(this.elementoAsignado == this.imagenPiedra)
          this.textoResultado= "¡Empataste!";
        else if(this.elementoAsignado == this.imagenPapel)
          this.textoResultado= "¡Perdiste!";
        else{
          this.textoResultado= "¡Ganaste!";
          this.saveJugada(10);
        }
      break;
      
      case 'papel':
        this.elementoSeleccionado = this.imagenPapel;

        if(this.elementoAsignado == this.imagenPiedra) {
          this.textoResultado= "¡Ganaste!";
          this.saveJugada(10);
        }
        else if(this.elementoAsignado == this.imagenPapel)
          this.textoResultado= "¡Empataste!";
        else
          this.textoResultado= "¡Perdiste!";
      break;

      case 'tijera':
        this.elementoSeleccionado = this.imagenTijera;

        if(this.elementoAsignado == this.imagenPiedra)
          this.textoResultado= "¡Perdiste!";
        else if(this.elementoAsignado == this.imagenPapel) {
          this.textoResultado= "¡Ganaste!";
          this.saveJugada(10);
        }
        else
          this.textoResultado= "¡Empataste!";
      break;
    }
  }

  saveJugada(puntaje: number) {

    this.jugada = {
    "jugador": localStorage.getItem('usuario'),
    "nombreJuego" :localStorage.getItem('juego'),
    "puntaje": puntaje,
    "fechaJugada": new Date()}

    this.jugadaService.saveJugada(this.jugada)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  } 

  RepetirJuego() {
    this.ocultarResultados = true; 
    this.ocultarElementos = false; 

    this.elementoAsignado = ""; 
    this.elementoSeleccionado = "";
    this.textoResultado = "";
  }



  ngOnInit() {
  }

}
