export default class Usuario{
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

    get Ps(){
        return this.#ps;
    }

    /**
     * @param {number} ps
     */
    set PsC(ps){
        if (this.#ps<=ps) {
            if (ps>=this.#psMax) {
                this.#ps = this.#psMax;
            }else{
                this.#ps = ps;
            }
        }
    }

    /**
     * @param {number} mana
     */
    set ManaC(mana){
        if (this.#mana<=mana) {
            if (mana>=this.#manaMax) {
                this.#mana = this.#manaMax;
            }else{
                this.#mana = mana;
            }
        }
    }
    /*
    set SubidadeNivel(){
        this.#fuerza = ;
        this.#agilidad= ;
        this.#carisma = ;
        this.#constitucion= ;
        this.#destreza= ;
        this.#inteligencia= ;
        this.#suerte=;
        this.#sabiduria = ;
        this.#psMax =;
        this.#manaMax=;
    }*/
}