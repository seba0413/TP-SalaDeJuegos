import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Jugada } from 'src/app/models/jugada';
import { JugadaViewModel } from 'src/app/models/jugadaViewModel';
import { JugadaService } from 'src/app/services/jugada.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  @Input()
  listado: Array<any>;
  jugadas: JugadaViewModel[] = [];

  constructor(private jugadaService: JugadaService) {
  }

  loadJugadas() {debugger
    this.jugadaService.getJugadas().subscribe(response=> {
      this.jugadas = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const jug: JugadaViewModel = {
          jugador: data.jugador,
          nombreJuego: data.nombreJuego,
          fechaJugada: data.fechaJugada.toDate(),
          fecha: "",
          resultado: data.resultado
        };
        jug.fecha = this.modificarStringFecha(jug.fechaJugada);
        this.jugadas.push(jug);
      });
    });
  }

  modificarStringFecha(fecha: Date) {
    var fechaString = fecha.toString().split('GMT');
    var fechaFinal = fechaString[0];
    return fechaFinal;
  }

  ngOnInit() {
    this.loadJugadas();
  }

  ver() {
    console.info(this.listado);
  }

}
