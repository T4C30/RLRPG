import {Clase} from './Clase.js';
export default class Guerrero extends Clase {
    constructor() {
        super(fuerza, constitucion, inteligencia, sabiduria, destreza, agilidad, carisma, suerte, nombre);
        fuerza = 12;
        nombre = "Guerro";
    }

    get NombreYFuerza(){
        return console.log(nombre), console.log(fuerza);
    }
}