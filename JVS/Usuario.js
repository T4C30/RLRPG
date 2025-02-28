import Estatus from "./Estatus";
import Clase from "./Clase";

export default class Usuario extends Estatus{
    #nivel = 0;
    #nombre;
    #clase;

    #psActual;
    #manaActual;

    constructor(nombre, fuerza,constitucion,inteligencia,sabiduria,destreza,agilidad,carisma,suerte){
        super(fuerza,constitucion,inteligencia,sabiduria,destreza,agilidad,carisma,suerte);
        this.#nombre = nombre;
    }

    /**
     * Hace el calculo de la salud con la contitución por nivel
     */
    calculoDeSalud(){
        Estatus.psMax = this.nivel * this.constitucion;
    }
    /**
     * Hace el calculo del mana con la sabiduria por nivel 
     */
    calculoDeMana(){
        Estatus.manaMax = this.nivel * this.sabiduria;
    }
    
    seleccionarClase(){
        return ;
    }

    accederInvetario(){

    }

    /**
     * cuando un jugador sube de nivel
     */
    SubidadeNivel(){
        this.#nivel++;
        this.fuerza += Clase.subidaDeNivel_Fuerza(this.#clase);
        this.agilidad += Clase.subidaDeNivel_Agilidad(this.#clase) ;
        this.carisma += Clase.subidaDeNivel_Carisma(this.#clase);
        this.constitucion += Clase.subidaDeNivel_Constitución(this.#clase);
        this.destreza += Clase.subidaDeNivel_Destreza(this.#clase);
        this.inteligencia += Clase.subidaDeNivel_Inteligencia(this.#clase);
        this.suerte +=Clase.subidaDeNivel_Suerte(this.#clase);
        this.sabiduria += Clase.subidaDeNivel_Sabiduría(this.#clase);
        this.psMax = calculoDeSalud();
        this.manaMax= calculoDeMana();
    }
}