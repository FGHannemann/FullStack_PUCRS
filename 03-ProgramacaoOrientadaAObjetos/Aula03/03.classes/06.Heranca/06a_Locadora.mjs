import { CarroComPlaca } from "./06a_CarroComPlaca.mjs";

export class Locadora{
    #_carros

    constructor(){
        this.#_carros=[]
    }

    adicionaCarros(umCarro){
        this.#_carros.push(umCarro)
        console.log("A locadora tem "+this.#_carros.length+" carro(s).")
    }

    consultaCarros(){
        this.#_carros.forEach(
            (carro) => console.log("Carro placa ("+carro.placa+"); tanque: "+carro.tanque ))
    }
    abasteceCarro(index, qtd){
        if (index>=0 && index<=this.#_carros.length)
            this.#_carros[index].tanque=qtd
    }
}