import { CarroComPlaca } from "./06a_CarroComPlaca.mjs";
import { Locadora } from "./06a_Locadora.mjs";

var locadora = new Locadora()

locadora.adicionaCarros(new CarroComPlaca("BCA-3210"))
locadora.adicionaCarros(new CarroComPlaca("ABC-0123"))
locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()

locadora.abasteceCarro(1,30)
locadora.abasteceCarro(0,30)
locadora.consultaCarros()