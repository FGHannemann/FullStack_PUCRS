const circulo = require('./01_ModuleDefinition_CJS');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);
console.log(`A comprimento da circunferência de um círculo cujo raio mede 4 é ${circulo.circunferencia(4)}`);

//acessando diretamente/especeficamente uma função
const {area} = require('./01_ModuleDefinition_CJS');
const {circunferencia} = require('./01_ModuleDefinition_CJS');
console.log(`Área do círculo de raio 4 é ${area(2)}`);
console.log(`A comprimento da circunferência de um círculo cujo raio mede 4 é ${circunferencia(2)}`);
