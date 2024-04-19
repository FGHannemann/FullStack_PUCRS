array = [2,4,5,6,7,8,9,10,11,12,13]
//array = [2,4,6,8,10]
//array = [3,5,7,11,13] //primos ímpares
//array = [2] //primos pares

console.log("Array: "+array)
var newArray = array.map( (item) => item*2 )
console.log(newArray)

newArray = array.map( (item) => {return {x: item, y: 2*item}} )
console.log(newArray)