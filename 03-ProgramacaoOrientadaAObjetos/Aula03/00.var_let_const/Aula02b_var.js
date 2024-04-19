//Declarando variáveis utilizando var
//01c_var

function testVar01(){
    let let01="let 01"
    {
        let let02="let 02"
        console.log("Dentro do bloco: 01a."+let01)
        console.log("Dentro do bloco: 01b."+let02)
    }
    console.log("Fora do bloco 02a."+let01)
    console.log("Fora do bloco 02a."+let02)
}

testVar01()