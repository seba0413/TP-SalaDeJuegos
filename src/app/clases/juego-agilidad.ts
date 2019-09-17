import { Juego } from './juego'

export class JuegoAgilidad extends  Juego{

    primerNumero: number = 0;
    segundoNumero: number = 0;
    operador: string = "";
    resultado: number = 0;
    numeroIngresado = 0; 

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad aritmetica",gano,jugador);
    }

    calcularResultado(){

        switch(this.operador){
            case "+":
                this.resultado = this.primerNumero + this.segundoNumero;
            break;

            case "-":
                this.resultado = this.primerNumero - this.segundoNumero;
            break;

            case "*":
                this.resultado = this.primerNumero * this.segundoNumero;
            break;
        }
        console.log(this.primerNumero + " " + this.operador + " " + this.segundoNumero + " = " + this.resultado);
    }

    asignarNumeros(){
         this.primerNumero = Math.floor((Math.random() * 100)+1);
         this.segundoNumero = Math.floor((Math.random() * 10)+1);
    }

    asignarOperador(){
        var numero = Math.floor((Math.random() * 100));
        if(numero > 66)
            this.operador = "*";
        else if (numero > 33)
            this.operador = "-";
        else
            this.operador = "+";        
    }

    public verificar(){

        if (this.numeroIngresado == this.resultado) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } 
        else {
            return false;
        }
    } 

    generarCalculo(){
        this.asignarNumeros();
        this.asignarOperador();
        this.calcularResultado();
    }
}
