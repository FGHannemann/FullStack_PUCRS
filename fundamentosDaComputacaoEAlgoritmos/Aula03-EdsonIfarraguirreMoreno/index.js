/*
** Conceito inicial
*/
console.log('Hello World!!!')
console.log('Fundamentos de Computação e Algoritmos.')


/*
** Implementando a primeira função
*/
function parImpar(limitSup){
    for (let i=0;  i<limitSup; i++){
        if(i%2==1)
            console.log(i+' é um número ímpar!')
        else
            console.log(i+' é um número par!')
    }
}

parImpar(10)

