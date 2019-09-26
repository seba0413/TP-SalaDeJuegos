export const MARCA_JUGADOR = { JUGADOR: "O", COMPU: "X" };


export class Celda {
  
    private _marca: boolean;
    private _jugador: string;

 
    public get marca(): boolean {
        return this._marca;
    }
    public get jugador(): string {
        return this._jugador;
    }

    public set marca(matched: boolean) {
        this._marca = matched;
    }
   
    public set jugador(player : string) {
        this._jugador = player;
    }
    
    constructor(){
        this._jugador = "";
        this._marca = false;
    }
}
