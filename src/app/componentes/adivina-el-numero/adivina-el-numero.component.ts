
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { FormsModule } from '@angular/forms';
import { Jugada } from 'src/app/models/jugada';
import { JugadaService } from 'src/app/services/jugada.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})

export class AdivinaElNumeroComponent implements OnInit {
  
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  ocultarEsperando: boolean = true; 
  ocultarIngrese: boolean = true; 
  usuario: string; 
  jugada: Jugada; 
 
  constructor(private jugadaService: JugadaService) { 

    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;

    localStorage.setItem('juego', 'adivina el numero');
    
  }

  generarnumero() {

    this.focoEnInput();
    this.ocultarIngrese = false; 
    this.nuevoJuego.generarnumero();
    this.contador=0;
    this.ocultarEsperando = false;
  }

  verificar()  {
    this.focoEnInput();
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano); 

    if (this.nuevoJuego.verificar()){
 
      this.ocultarEsperando = true; 
      this.enviarJuego.emit(this.nuevoJuego); 
      this.ocultarIngrese = true; 
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.numeroSecreto=0;
      this.usuario = localStorage.getItem('usuario');
      this.saveJugada("Gano");

    } 
    else {
      this.saveJugada("Perdio");
      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="Intento fallido, ¡Arriba! ";
          break;
          case 2:
          mensaje="No, ¿Te estaras Acercando? ";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#" + this.contador + " " + mensaje + ". Ayuda : " + this.nuevoJuego.retornarAyuda());
    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  MostarMensaje ( mensaje: string = "este es el mensaje", ganador: boolean = false) {

    var modelo=this;
    this.Mensajes=mensaje;    
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

    saveJugada(resultado: string) {

    this.jugada = {
    "jugador": localStorage.getItem('usuario'),
    "nombreJuego" :localStorage.getItem('juego'),
    "puntaje": 10,
    "fechaJugada": new Date(),
    "resultado": resultado
  }

    this.jugadaService.saveJugada(this.jugada)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  } 

  focoEnInput(){
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("ingrese")).value = null;
      document.getElementById("ingrese").focus();
    }, 1);
  }

  ngOnInit() {
  }

}
