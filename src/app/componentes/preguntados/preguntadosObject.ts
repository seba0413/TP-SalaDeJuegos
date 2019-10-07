import {Respuestas} from './respuestas';

export class PreguntadosObject {

    pregunta: string; 
    respuestas: Array<Respuestas>;
    idRespuestaCorrecta: number;

    constructor(pregunta: string, respuestas:Array<Respuestas>, id:number)
    {
        this.pregunta= pregunta; 
        this.respuestas = respuestas;
        this.idRespuestaCorrecta = id;
    }
    
}