import { Component, OnInit } from '@angular/core';
import { PreguntadosObject } from './preguntadosObject';
import {Respuestas} from './respuestas';
import { Jugada } from 'src/app/models/jugada';
import { JugadaService } from 'src/app/services/jugada.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  listaPreguntas: Array<PreguntadosObject>;
  pregunta: string;
  respuestas: Array<Respuestas>;
  respuestaCorrecta: number;
  ocultarNuevoJuego: boolean;
  ocultarBotonSiguiente: boolean; 
  contador: number;
  mensaje: string; 
  gano: boolean; 
  botonesRespuesta: any;
  jugada: Jugada;

  constructor(private jugadaService: JugadaService) {

    this.listaPreguntas = [
      (new PreguntadosObject("¿Cual de estos equipos no es de la liga italiana?", [ (new Respuestas(1, "Sevilla")), (new Respuestas(2, "Torino")), (new Respuestas(3, "Juventus")), (new Respuestas(4, "Milan")) ], 1)),
      (new PreguntadosObject("¿Cuantas copas del mundo tiene la seleccion argentina?", [ (new Respuestas(1, "No tiene")), (new Respuestas(2, "3")), (new Respuestas(3, "1")), (new Respuestas(4, "2")) ], 4)),
      (new PreguntadosObject("¿Cuántas tarjetas amarillas debe recibir un jugador para ser expulsado?", [ (new Respuestas(1, "1")), (new Respuestas(2, "2")), (new Respuestas(3, "3")), (new Respuestas(4, "Las tarjetas amarillas no se acumulan")) ], 2)),
      (new PreguntadosObject("¿Cómo se llama quien dirige a un equipo de fútbol?", [ (new Respuestas(1, "Profesor Técnico")), (new Respuestas(2, "Preparador Físico")), (new Respuestas(3, "Secretario Técnico")), (new Respuestas(4, "Director Técnico")) ], 4)),
      (new PreguntadosObject("¿Cuántas veces gano España la copa del mundo?", [ (new Respuestas(1, "1")), (new Respuestas(2, "2")), (new Respuestas(3, "3")), (new Respuestas(4, "Ninguna")) ], 1)),
      (new PreguntadosObject("¿En qué país se jugo el mundial 2014?", [ (new Respuestas(1, "Brasil")), (new Respuestas(2, "Alemania")), (new Respuestas(3, "Rusia")), (new Respuestas(4, "Sudáfrica")) ], 1)),
      (new PreguntadosObject("¿Qué equipos disputan el superclásico de España?", [ (new Respuestas(1, "Atletico Madrid - Barcelona")), (new Respuestas(2, "Atletico Madrid - Real Madrid")), (new Respuestas(3, "Real Madrid - Barcelona")), (new Respuestas(4, "Athletic Bilbao - Atletico Madrid")) ], 3)),
      (new PreguntadosObject("¿Cuál de estas palabras no tienen que ver con el fútbol?", [ (new Respuestas(1, "Gol")), (new Respuestas(2, "Penal")), (new Respuestas(3, "Offside")), (new Respuestas(4, "Corner corto")) ], 4)),
      (new PreguntadosObject("¿Qué jugador puede tomar la pelota con la mano además del arquero?", [ (new Respuestas(1, "Ninguno")), (new Respuestas(2, "Defensor")), (new Respuestas(3, "Volante")), (new Respuestas(4, "Delantero")) ], 1)),
      (new PreguntadosObject("¿Cada cuantos años se juega un mundial?", [ (new Respuestas(1, "2")), (new Respuestas(2, "4")), (new Respuestas(3, "6")), (new Respuestas(4, "8")) ], 2)),
      (new PreguntadosObject("¿Quién es el entrenador de la seleccion argentina?", [ (new Respuestas(1, "Diego Maradona")), (new Respuestas(2, "Alejandro Sabella")), (new Respuestas(3, "Lionel Scaloni")), (new Respuestas(4, "Caruso Lombardi")) ], 3)),
      (new PreguntadosObject("¿Cuál es el clasico del AC Milan?", [ (new Respuestas(1, "Inter")), (new Respuestas(2, "Juventus")), (new Respuestas(3, "Roma")), (new Respuestas(4, "Nápoli")) ], 1)),
      (new PreguntadosObject("¿Quién ganó el mundial de 2014?", [ (new Respuestas(1, "Argentina")), (new Respuestas(2, "Brasil")), (new Respuestas(3, "España")), (new Respuestas(4, "Alemania")) ], 4)),
      (new PreguntadosObject("¿En qué país se jugo la copa América centenario 2016?", [ (new Respuestas(1, "Chile")), (new Respuestas(2, "Estados Unidos")), (new Respuestas(3, "Uruguay")), (new Respuestas(4, "Brasil")) ], 2)),
      (new PreguntadosObject("¿Cuál es el apellido de james, la figura de la selección de Colombia?", [ (new Respuestas(1, "Rodriguez")), (new Respuestas(2, "Valderrama")), (new Respuestas(3, "Cordoba")), (new Respuestas(4, "Falcao")) ], 1)),
      (new PreguntadosObject("¿Qué selección fue la ganadora de la eurocopa 2012?", [ (new Respuestas(1, "Italia")), (new Respuestas(2, "España")), (new Respuestas(3, "Francia")), (new Respuestas(4, "Alemania")) ], 2)),
      (new PreguntadosObject("¿Qué apodo tenia el jugador chileno Marcelo Salas?", [ (new Respuestas(1, "El príncipe")), (new Respuestas(2, "El torero")), (new Respuestas(3, "El niño")), (new Respuestas(4, "El matador")) ], 4)),
      (new PreguntadosObject("¿De qué color es la camiseta del Liverpool?", [ (new Respuestas(1, "Blanca")), (new Respuestas(2, "Azul")), (new Respuestas(3, "Roja")), (new Respuestas(4, "Celeste")) ], 3)),
      (new PreguntadosObject("¿Qué arquero es famoso por hacer goles de tiro libre?", [ (new Respuestas(1, "Navarro Montoya")), (new Respuestas(2, "José Luis Chilavert")), (new Respuestas(3, "René Higuita")), (new Respuestas(4, "El Pato Abbondanzieri")) ], 2)),
      (new PreguntadosObject("¿A qué equipo le marcó Maradona el famoso gol con la mano de dios?", [ (new Respuestas(1, "Inglaterra")), (new Respuestas(2, "Brasil")), (new Respuestas(3, "Alemania")), (new Respuestas(4, "Italia")) ], 1)),
      (new PreguntadosObject("¿En qué país se jugó la copa del mundo 1978?", [ (new Respuestas(1, "Holanda")), (new Respuestas(2, "Argentina")), (new Respuestas(3, "Inglaterra")), (new Respuestas(4, "Estados Unidos")) ], 2)),
      (new PreguntadosObject("¿Cómo se apoda la seleccion de Colombia?", [ (new Respuestas(1, "La Amarilla")), (new Respuestas(2, "Los Cafeteros")), (new Respuestas(3, "La Albiceleste")), (new Respuestas(4, "Los Ticos")) ], 2)),
      (new PreguntadosObject("¿Qué seña debe hacer un árbitro cuando aplica la ley de ventaja?", [ (new Respuestas(1, "Las dos manos adelante")), (new Respuestas(2, "Una mano arriba y la otra adelante")), (new Respuestas(3, "Ninguna")), (new Respuestas(4, "Soplar el silbato")) ], 1)),
      (new PreguntadosObject("¿Cuál es la duración aproximada de un mundial?", [ (new Respuestas(1, "60 días")), (new Respuestas(2, "45 días")), (new Respuestas(3, "30 días")), (new Respuestas(4, "20 días")) ], 3)),
      (new PreguntadosObject("¿A partir de qué mundial el ganador se lleva 3 puntos en vez de dos?", [ (new Respuestas(1, "1986")), (new Respuestas(2, "1990")), (new Respuestas(3, "1994")), (new Respuestas(4, "1998")) ], 3)),
      (new PreguntadosObject("¿Qué debe hacer el árbitro para señalar un tiro libre directo?", [ (new Respuestas(1, "Levantar las dos manos y soplar el silbato")), (new Respuestas(2, "Levantar una mano y soplar el silbato")), (new Respuestas(3, "Sólo soplar su silbato")), (new Respuestas(4, "Ninguna de las anteriores")) ], 2)),
      (new PreguntadosObject("¿Cómo se apoda Rosario Central?", [ (new Respuestas(1, "La Lepra")), (new Respuestas(2, "El Bicho")), (new Respuestas(3, "Los Quemeros")), (new Respuestas(4, "Los Canallas")) ], 4)),
      (new PreguntadosObject("¿Cuál de estos apodos no se corresponde con San Lorenzo de Almagro?", [ (new Respuestas(1, "Cuervos")), (new Respuestas(2, "Matadores")), (new Respuestas(3, "Fortin")), (new Respuestas(4, "Ciclón")) ], 3)),
      (new PreguntadosObject("¿Quién es el técnico del Atlético Madrid?", [ (new Respuestas(1, "Diego Simeone")), (new Respuestas(2, "Pep Guardiola")), (new Respuestas(3, "Mauricio Pochettino")), (new Respuestas(4, "Jose Mourinho")) ], 1)),
      (new PreguntadosObject("¿Qué país ganó el mundial Corea-Japon 2002?", [ (new Respuestas(1, "Brasil")), (new Respuestas(2, "Italia")), (new Respuestas(3, "Alemania")), (new Respuestas(4, "España")) ], 1)),
    ];

    this.ocultarNuevoJuego = false;
    this.ocultarBotonSiguiente = true; 
    this.contador = 0; 

    localStorage.setItem('juego', 'preguntados futbol');
  }
  
  NuevoJuego() {

    this.pregunta = this.listaPreguntas[this.contador].pregunta;
    this.respuestas = this.listaPreguntas[this.contador].respuestas;
    this.respuestaCorrecta = this.listaPreguntas[this.contador].idRespuestaCorrecta;
    this.ocultarNuevoJuego = true; 
  }

  eligeRespuesta(id:number) {
    if(id == this.respuestaCorrecta) {
      this.gano = true; 
      this.MostarMensaje("¡Respuesta correcta!", this.gano);
      this.saveJugada("Gano");
    }
    else {
      this.gano = false; 
      this.MostarMensaje("Le pifiaste che", this.gano);
      this.saveJugada("Perdio");
    }
    this.ocultarBotonSiguiente = false; 
    this.deshabilitarBotones(id - 1);
  }

  siguiente() {
    this.contador++;
    this.pregunta = this.listaPreguntas[this.contador].pregunta;
    this.respuestas = this.listaPreguntas[this.contador].respuestas;
    this.respuestaCorrecta = this.listaPreguntas[this.contador].idRespuestaCorrecta;
    this.ocultarBotonSiguiente = true; 
  }

  deshabilitarBotones(index: number) {
    this.botonesRespuesta = document.getElementsByName("botonesRespuestas");

    for(var i = 0; i < this.botonesRespuesta.length; i++) {
      if(i == index) {
        this.botonesRespuesta[i].className = "botonElegido";
        this.botonesRespuesta[i].setAttribute("disabled", "");
      }
      else
        this.botonesRespuesta[i].setAttribute("disabled", "");
    }
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

  ngOnInit() {
  }

}
