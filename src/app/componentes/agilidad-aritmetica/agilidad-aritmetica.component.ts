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
    this.nuevoJuego.resetearJuego();
    this.jugando = true; 
    this.ocultarVerificar=false;
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
      }, 900);
  }

  verificar()
  {
    if(this.nuevoJuego.verificar())
      alert("Bien! No sos tan burr@!");
    else
      alert("jajaja batiste cualquiera!");
      
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);  

    this.jugando = false;
  }  

}
