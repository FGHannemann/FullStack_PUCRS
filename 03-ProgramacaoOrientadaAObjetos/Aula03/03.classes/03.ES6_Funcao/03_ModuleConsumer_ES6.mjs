import { area, circunferencia as circ } from "./03_ModuleDefinition_ES6.mjs";
console.log(`A área do círuclo de raio 4 é ${area(4)}`);
console.log(`A circunferência de um círculo cujo raio mede 4 é ${circ(4)}`);

import * as circulo from "./03_ModuleDefinition_ES6.mjs";
console.log(`A área do círuclo de raio 4 é ${circulo.area(4)}`);
console.log(`A circunferência de um círculo cujo raio mede 4 é ${circulo.circunferencia(4)}`);
