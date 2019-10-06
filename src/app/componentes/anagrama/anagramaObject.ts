export class AnagramaObject {

    palabra: string; 
    anagramas: Array<string>;

    constructor(palabra: string, anagramas:Array<string>)
    {
        this.palabra= palabra; 
        this.anagramas = anagramas;
    }
    
}