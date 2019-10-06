import { Component, OnInit } from '@angular/core';

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
  eligio: boolean = true; 
  textoResultado: string;
  loop: any;

  constructor() {
    this.imagenPiedra = "./assets/imagenes/piedra.jpg";
    this.imagenPapel = "./assets/imagenes/papel.jpg";
    this.imagenTijera = "./assets/imagenes/tijera.jpg";

  }

  // nuevoJuego() {

  //   this.loop = setInterval(() => {
  //     this.nuevoJuego.generarJugada();
  //     this.setImagenes();
  //     if (this.stop) {
  //       this.nuevoJuego.jugadaUsuario = this.jugadaSeleccionada;
  //       this.setImagenes();
  //       clearInterval(this.repetidor);
  //       this.verificar();
  //     }
  //   }, 80);

    // this.eligio = false; 
    // this.verificar(elementoSeleccionado);

  // }
  

  asignarElemento(elementoSeleccionado: string){
    var numero = Math.floor((Math.random() * 100));
    if(numero > 66)
        this.elementoAsignado = this.imagenPiedra;
    else if (numero > 33)
        this.elementoAsignado = this.imagenPapel;
    else
        this.elementoAsignado = this.imagenTijera;

    this.eligio = false;
    this.verificar(elementoSeleccionado);    

  }

  verificar(elementoSeleccionado: string) {
    switch(elementoSeleccionado)
    {
      case 'piedra':
        if(this.elementoAsignado == this.imagenPiedra)
          this.textoResultado= "¡Empataste!";
        else if(this.elementoAsignado == this.imagenPapel)
          this.textoResultado= "¡Perdiste!";
        else
          this.textoResultado= "¡Ganaste!";
      break;
      case 'papel':
        if(this.elementoAsignado == this.imagenPiedra)
          this.textoResultado= "¡Ganaste!"
        else if(this.elementoAsignado == this.imagenPapel)
          this.textoResultado= "¡Empataste!";
        else
          this.textoResultado= "¡Perdiste!";
      break;
      case 'tijera':
        if(this.elementoAsignado == this.imagenPiedra)
          this.textoResultado= "¡Perdiste!";
        else if(this.elementoAsignado == this.imagenPapel)
          this.textoResultado= "¡Ganaste!";
        else
          this.textoResultado= "¡Empataste!";
      break;
    }

  }



  ngOnInit() {
  }

}
