var a = []

a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
console.log(a.length)

console.log("  -for .. in-")
console.log(" -=-=-=-=-=- ")

// lista os índices com valores atribuídos
for (let val in a)
    console.log(" --> "+val)
console.log(" -=-=-=-=-=- \n")


// lista os valores de todos os índices, mesmos os ainda não definidos
console.log("  -for .. of-")
console.log(" -=-=-=-=-=- ")

for (let val of a)
    console.log(" --> "+val)
console.log(" -=-=-=-=-=- \n")

// lista os valores de todos os índices, mesmos os ainda não definidos, percorrendo todos os índices
console.log("  -for .. (;;)- ")
console.log(" -=-=-=-=-=- ")

for (let i=0; i<a.length; i++)
    console.log(" --> "+i+": "+a[i])
console.log(" -=-=-=-=-=- \n")


// Usando in para indicar os índices preenchos e retornando o valor de cada índice
console.log("  -Mesclando in e índices- ")
console.log(" -=-=-=-=-=- ")

for (let val in a)
    console.log(" --> "+val+": "+a[val])
console.log(" -=-=-=-=-=- \n")
