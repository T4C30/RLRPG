import Estatus from './Estatus';


export default class Clase extends Estatus {
    #nombre;

    static #picaro = new Clase("Picaro", 1, 2, 2, 1, 4, 5, 3, 1);
    static #guerrero = new Clase("Guerrero", 4, 5, 1, 1, 2, 3, 2, 4);
    static #mago = new Clase();

    constructor(nombre, fuerza, constitucion, inteligencia, sabiduria, destreza, agilidad, carisma, suerte) {
        super(fuerza, constitucion, inteligencia, sabiduria, destreza, agilidad, carisma, suerte);
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    subidaDeNivel_Fuerza(clase){
        return clase.fuerza;
    }
    
    subidaDeNivel_Constitución(clase){
        return clase.constitucion;
    }   

    subidaDeNivel_Agilidad(clase){
        return clase.fuerza;
    }   

    subidaDeNivel_Destreza(clase){
        return clase.this.destreza;
    }   

    subidaDeNivel_Inteligencia(clase){
        return clase.this.inteligencia;
    }   

    subidaDeNivel_Sabiduria(clase){
        return clase.this.constitucion;
    }   

    subidaDeNivel_Carisma(clase){
        return clase.this.carisma;
    }   

    subidaDeNivel_Suerte(clase){
        return clase.this.suerte;
    }   
}