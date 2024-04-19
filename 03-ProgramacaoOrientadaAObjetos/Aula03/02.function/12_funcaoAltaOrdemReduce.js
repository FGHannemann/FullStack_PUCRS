array = [2,4,5,6,7,8,9,10,11,12,13]
//array = [2,4,6,8,10]
//array = [3,5,7,11,13] //primos ímpares
//array = [2] //primos pares

let resultado = array.reduce((acc, val) => acc+=(val%2==0)?val:0,0)

console.log("A soma dos números pares é "+resultado)