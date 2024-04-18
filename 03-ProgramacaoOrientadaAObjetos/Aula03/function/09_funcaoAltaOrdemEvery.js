array = [4,5,6,7,8,9,10]
//array = [2,4,6,8,10]
//array = [3,5,7,11,13] //primos
//array = [2] //primos pares
regraPar = (item) => item%2 == 0

regraImpar = (item) => item%2 != 0

console.log("Todos os número são PARES? "+array.every(regraPar)+ " - "+array)
console.log("Todos os número são IMPARES? "+array.every(regraImpar)+ " - "+array)

regraPrimo = (item) => {
    let numDiv=0;
    for (let divisor=1; divisor<=item; divisor++)
        if ((item%divisor)==0)
            numDiv++
    if(numDiv==2)
        return true
    else
        return false
}

console.log("Todos os número são primos? "+array.every(regraPrimo)+ " - "+array)

