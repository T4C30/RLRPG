export default class Estatus {
    #fuerza;
    #constitucion;
    #destreza;
    #agilidad;
    #inteligencia;
    #sabiduria;
    #carisma;
    #suerte;

    #ps;
    #psMax;
    #mana;
    #manaMax;

    constructor(fuerza,constitucion,inteligencia,sabiduria,destreza,agilidad,carisma,suerte){
        this.#fuerza = fuerza;
        this.#agilidad= agilidad;
        this.#carisma = carisma;
        this.#constitucion= constitucion;
        this.#destreza= destreza;
        this.#inteligencia= inteligencia;
        this.#suerte=suerte;
        this.#sabiduria = sabiduria;
    }
}