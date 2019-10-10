import { Component, OnInit } from '@angular/core';
import { JugadaViewModel } from 'src/app/models/jugadaViewModel';
import { JugadaService } from 'src/app/services/jugada.service';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})


export class JugadoresListadoComponent implements OnInit {

  datos: JugadaViewModel[] = [];
  datosAux: JugadaViewModel[] = [];
  
  constructor(private jugadaService: JugadaService) {
  }

  TraerTodos(){

    this.jugadaService.getJugadas().subscribe(response=> {
      this.datos = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const dato: JugadaViewModel = {
          jugador: data.jugador,
          nombreJuego: data.nombreJuego,
          fechaJugada: data.fechaJugada.toDate(),
          fecha: "",
          resultado: data.resultado
        };
        this.unique(dato);
      });
    });
  }

  unique(dato) {

    var repetido = false;  

    if(this.datos.length == 0)
      this.datos.push(dato);

    else {

      for(var i = 0; i < this.datos.length; i++)
      {
        if(this.datos[i].jugador == dato.jugador)
          repetido = true; 
      }
  
      if(!repetido)
        this.datos.push(dato);    
    }  
  }



  TraerGanadores(){
  }

  TraerPerdedores(){
  }

  ngOnInit() {
    this.TraerTodos();
  }

}
