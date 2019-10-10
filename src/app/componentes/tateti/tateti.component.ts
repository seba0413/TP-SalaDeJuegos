import { Component, OnInit } from '@angular/core';
import { Celda, MARCA_JUGADOR } from './celda';
import { JuegoTaTeTi } from '../../clases/juego-tateti';
import { Jugada } from 'src/app/models/jugada';
import { JugadaService } from 'src/app/services/jugada.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})

export class TatetiComponent implements OnInit {

  static JUEGO_SIGUE: number = 0;
  static GANA_JUGADOR: number = 1;
  static GANA_COMPU: number = 1;

  nuevoJuego: JuegoTaTeTi;
  jugando:boolean = false;
  turno: boolean;

  celdasSinMarcar: number[];
  celdasMarcadas: number[];
  celdas: Celda[];
  marcadaJugador: number[];
  marcadaCompu: number[];

  mensaje: string;
  ganaJugador: number;

  jugada: Jugada; 
  
  constructor(private jugadaService: JugadaService) {
    this.nuevoJuego = new JuegoTaTeTi();
    localStorage.setItem('juego', 'ta te ti');
   }

  NuevoJuego() {
    this.resetearJuego();
    this.jugando = true;     
  }

  juegaJugador(indiceMarcado: number): void {

    if (this.turno && !this.celdas[indiceMarcado].marca) {
      this.turno = false;
      this.celdas[indiceMarcado].marca = true;
      this.celdas[indiceMarcado].jugador = "O";
      this.marcadaJugador.push(indiceMarcado);
      this.verificar(this.marcadaJugador, TatetiComponent.GANA_JUGADOR);

      if (this.ganaJugador == TatetiComponent.JUEGO_SIGUE) {
        this.deshabilitarNoMarcada(indiceMarcado);
        this.juegaCompu();
      } else {
        this.mostrarMensaje("¡Ganaste, crack!", true);
        this.jugando = false; 
        this.saveJugada(10);
      }
    }
  }

  juegaCompu() {debugger

    if (this.celdasSinMarcar.length > 0) {

      let index: number;
      let celda: Celda;
      index = Math.floor(Math.random() * this.celdasSinMarcar.length);
      this.celdas[this.celdasSinMarcar[index]].marca = true;
      this.celdas[this.celdasSinMarcar[index]].jugador = "X";
      this.marcadaCompu.push(index);
      this.verificar(this.marcadaCompu, TatetiComponent.GANA_COMPU);

      if (this.ganaJugador == TatetiComponent.JUEGO_SIGUE) {
        this.turno = true;
        this.deshabilitarNoMarcada(this.celdasSinMarcar[index]);
      }
      else {
        this.mostrarMensaje("Perdiste. ¡Intentalo otra vez!", false);
        this.jugando = false; 
      }
    }
  }

  deshabilitarNoMarcada(index) {
    for (let i = 0; i < this.celdasSinMarcar.length; i++) {
      if (this.celdasSinMarcar[i] == index) {
        this.celdasSinMarcar.splice(i, 1);
        break;
      }
    }
  }

  mostrarMensaje ( mensaje: string = "este es el mensaje", ganador: boolean = false) {

    this.mensaje = mensaje;    
    var x = document.getElementById("snackbar");

    if(ganador) {
      x.className = "show Ganador";
    } 
    else {
        x.className = "show Perdedor"; 
    }    

    setTimeout(function() { 
      x.className = x.className.replace("show", "");
    }, 3000);
  } 

  verificar(celdasMarcadas: number[], jugador: number): void {

    if (celdasMarcadas.length > 2) {

      celdasMarcadas.sort((primero: number, segundo: number) => {
        let retorno: number = 0;
        if (primero > segundo) {
          retorno = 1;
        }
        else if (primero < segundo)
          retorno = -1;

      return retorno;
      });

    if (celdasMarcadas[0] == 0) {
      if ((celdasMarcadas[1] == 1 && celdasMarcadas[2] == 2) ||
        celdasMarcadas.find(celda => celda == 3) && celdasMarcadas.find(celda => celda == 6) ||
        celdasMarcadas.find(celda => celda == 4) && celdasMarcadas.find(celda => celda == 8)) {
        this.ganaJugador = jugador;
      }
    }
    else if (celdasMarcadas.find(celda => celda == 2) && celdasMarcadas.find(celda => celda == 4) && celdasMarcadas.find(celda => celda == 6))
      this.ganaJugador = jugador;
    else if (celdasMarcadas.find(celda => celda == 2) && celdasMarcadas.find(celda => celda == 5) && celdasMarcadas.find(celda => celda == 8))
      this.ganaJugador = jugador;
    else if (celdasMarcadas.find(celda => celda == 3) && celdasMarcadas.find(celda => celda == 4) && celdasMarcadas.find(celda => celda == 5))
      this.ganaJugador = jugador;
    else if (celdasMarcadas.find(celda => celda == 6) && celdasMarcadas.find(celda => celda == 7) && celdasMarcadas.find(celda => celda == 8))
      this.ganaJugador = jugador;
    else if (celdasMarcadas.find(celda => celda == 3) && celdasMarcadas.find(celda => celda == 4) && celdasMarcadas.find(celda => celda == 5))
      this.ganaJugador = jugador;
    else if (celdasMarcadas.find(celda => celda == 0) && celdasMarcadas.find(celda => celda == 3) && celdasMarcadas.find(celda => celda == 6))
      this.ganaJugador = jugador;
    else if (celdasMarcadas.find(celda => celda == 1) && celdasMarcadas.find(celda => celda == 4) && celdasMarcadas.find(celda => celda == 7))
      this.ganaJugador = jugador;
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

  resetearJuego(){
    this.ganaJugador = TatetiComponent.JUEGO_SIGUE;
    this.celdasSinMarcar = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.celdasMarcadas = [];
    this.marcadaJugador = [];
    this.marcadaCompu = [];
    this.celdas = [];
    this.turno = true;
    
    for (let i = 0; i < 9; i++) {
      this.celdas.push(new Celda());
    }
  }

  ngOnInit() {
  }
}


