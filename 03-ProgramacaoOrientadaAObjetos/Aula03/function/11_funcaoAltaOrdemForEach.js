array = [2,4,5,6,7,8,9,10,11,13]
//array = [2,4,6,8,10]
//array = [3,5,7,11,13] //primos
//array = [2] //primos pares

array.forEach(
    (nro) => console.log(
        nro+" -> "+(nro%2==0?"par":"ímpar")
    )
);


numDivisores = (item) => {
    let ndiv=0;
    for(let divisor = 1; divisor<=item; divisor++)
        if((item%divisor)==0)
            ndiv++
        return ndiv;
}

array.forEach(
    (nro) => console.log(
        nro+` -> numDivisores de 1 até ${nro} =`+numDivisores(nro)
    )
)