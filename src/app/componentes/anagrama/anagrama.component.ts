import { Component, OnInit } from '@angular/core';
import { AnagramaObject } from './anagramaObject';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  listaAnagramas: Array<AnagramaObject>;
  palabras: Array<string> = [];
  anagramas: Array<string>;
  palabraElegida: string;
  ocultarNuevoJuego: boolean;
  ocultarBotones: boolean;
  ocultarInputs: boolean;
  inputsRespuesta: any;
  respuestas: Array<string>;
  gano: boolean; 
  mensaje: string; 

  constructor() {
    this.listaAnagramas = [
      (new AnagramaObject("sofa", ["faso", "fosa", "safo"])),
      (new AnagramaObject("camarera", ["caramera", "macerara", "recamara"])),
      (new AnagramaObject("barco", ["braco", "broca", "cabro", "cobra"])),
      (new AnagramaObject("cocina", ["accion", "cocian", "concia", "conica"])),
      (new AnagramaObject("cadena", ["acedan", "canead", "cenada", "decana"])),
      (new AnagramaObject("cerebro", ["becerro", "bercero", "cerbero", "recobre"])),
      (new AnagramaObject("arcon", ["caron", "coran", "croan", "narco", "ronca"])),
      (new AnagramaObject("pastor", ["partos", "portas", "postar", "postra", "potras", "raptos", "trapos", "tropas"])),
      (new AnagramaObject("raton", ["antro", "notar", "rotan", "tanor", "tonar", "torna", "trona"]))
    ];
    
    for(var i = 0; i < this.listaAnagramas.length; i++) {
      this.palabras.push(this.listaAnagramas[i].palabra);
    }

    this.ocultarBotones = true;
    this.ocultarInputs = true; 
    this.ocultarNuevoJuego = false; 
  }

  NuevoJuego() {
    this.ocultarNuevoJuego = true; 
    this.ocultarBotones = false;
    this.resetearJuego();
  }

   elegirPalabra(palabra: string) {
     
     this.ocultarBotones = true;
     this.palabraElegida = palabra; 
     this.completarAnagramas(); 
     console.log(this.anagramas);
     this.ocultarBotones = true; 
     this.ocultarInputs = false; 
   }

   completarAnagramas() {

    for(var i = 0; i < this.listaAnagramas.length; i++) {

      if(this.palabraElegida == this.listaAnagramas[i].palabra) {

        for(var j = 0; j < this.listaAnagramas[i].anagramas.length; j++) {

          this.anagramas.push(this.listaAnagramas[i].anagramas[j]);
        }
        break;
      }
    }
  }

  obtenerRespuestas() {

    this.inputsRespuesta = document.getElementsByName('inputsRespuesta');
    for(var i = 0; i < this.inputsRespuesta.length; i++) {
      this.respuestas.push(this.inputsRespuesta[i].value);
    }

    this.verificar();
    this.mensajes();
    this.ocultarInputs = true; 
    this.ocultarNuevoJuego = false; 
  }

  verificar () {

    var contador: number = 0;
    this.gano = false;

    for(var i = 0; i < this.respuestas.length; i++) {

      for(var j = 0; j < this.anagramas.length; j++) {

        if(this.respuestas[i] == this.anagramas[j]) {
          contador++;
        }
      }
    }

    if(contador == this.anagramas.length)
      this.gano = true; 
  }

  MostarMensaje ( mensaje: string, ganador: boolean = false) {

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

  mensajes() {
    
    if(this.gano)
      this.MostarMensaje("¡Ganaste!", this.gano);
    else
      this.MostarMensaje("Segui participando", this.gano);
  }

  resetearJuego() {
    this.anagramas = [];
    this.palabraElegida = "";
    this.inputsRespuesta = []; 
    this.respuestas = [];
    this.gano = false;  
    this.mensaje = ""; 
  }

  ngOnInit() {
  
  }

}
