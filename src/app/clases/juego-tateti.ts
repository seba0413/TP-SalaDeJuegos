import { Juego } from './juego'

export class JuegoTaTeTi extends  Juego {

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Ta-Te-Ti",gano,jugador);
     }

     verificar() {
         return true; 
     }
}
