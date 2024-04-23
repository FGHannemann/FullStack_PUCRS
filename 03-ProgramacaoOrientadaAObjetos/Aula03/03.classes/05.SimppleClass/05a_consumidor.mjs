import { Carro } from "./05a_carro.mjs";

var carro = new Carro(55)
console.log("Capacidade tanque: "+carro.capacidade)
console.log("Qtde existente tanque: "+carro.tanque)

carro.tanque = 12
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 15
console.log(carro.tanque)

carro.tanque = 20
console.log(carro.tanque)

