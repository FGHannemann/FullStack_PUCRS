array = [2,4,5,6,7,8,9,10,11,12,13]
//array = [2,4,6,8,10]
//array = [3,5,7,11,13] //primos ímpares
//array = [2] //primos pares

numDivisores = (item) => {
    let ndiv = 0;
    for(let divisor=1; divisor<=item; divisor++)
        if((item%divisor)==0)
            ndiv++
    return ndiv;
}

array.filter((nro) => numDivisores(nro)==2)
array.map((item) => {return {x:item, par:(item%2)==0}})
array.forEach((obj) => console.log(obj.x + " é par? "+ obj.par));