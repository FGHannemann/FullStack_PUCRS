//Funções que recebem parâmetro

function pontenciaNum(base, expoente = 2) {
    let result = 1;
    for (let cont = 0; cont <expoente; cont++) {
        result *= base;
    }
    return result;
}

console.log(pontenciaNum());
console.log(pontenciaNum(4));
console.log(pontenciaNum(2,6));
console.log(pontenciaNum(2,6,18));
