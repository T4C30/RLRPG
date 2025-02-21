import Estatus from './Estatus';


export default class Clase extends Estatus {
    #nombre;

    constructor(nombre) {
        super(fuerza, constitucion, inteligencia, sabiduria, destreza, agilidad, carisma, suerte);
        this.#nombre = nombre;
    }

    
}