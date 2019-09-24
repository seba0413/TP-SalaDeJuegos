import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { Subscription } from "rxjs";
// import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  jugando: boolean;
  mensaje: string;
  ocultarEsperando: boolean = true; 
  private subscription: Subscription;

  ngOnInit() {
  }

   constructor() {
      this.jugando = false; 
      this.ocultarVerificar=true;
      this.Tiempo=5; 
      this.nuevoJuego = new JuegoAgilidad();
  }

  NuevoJuego() {
    this.focoEnInput();
    this.jugando = true; 
    this.ocultarVerificar = false;
    this.ocultarEsperando = false; 
    this.nuevoJuego.generarCalculo();
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 1000);
  }

  verificar()  { debugger 
    if(this.nuevoJuego.verificar()) {
      this.ocultarEsperando = true; 
      this.enviarJuego.emit(this.nuevoJuego); 
      this.MostarMensaje("¡Bien! No sos tan burr@!",true);
    }
    else {
      this.MostarMensaje("Batiste cualquiera ; ). ¡Proba otra vez!", false)
    }
    this.jugando = false; 
    this.nuevoJuego.resetearJuego();
  }  

  MostarMensaje ( mensaje: string = "este es el mensaje", ganador: boolean = false) {debugger

    var modelo=this;
    this.mensaje=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador) {
      x.className = "show Ganador";

    } 
    else {
        x.className = "show Perdedor";
        this.ocultarEsperando = true; 
    }    

    setTimeout(function() { 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar = false;
      modelo.ocultarEsperando = false; 

      if(ganador)
        modelo.ocultarEsperando = true; 

    }, 3000);
    console.info("objeto",x);
  }  

  focoEnInput(){
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("numIngresado")).value = null;
      document.getElementById("numIngresado").focus();
    }, 1);
  }

}
