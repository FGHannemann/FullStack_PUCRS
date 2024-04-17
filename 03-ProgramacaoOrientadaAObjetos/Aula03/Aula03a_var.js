//Declarando variáveis utilizando var
//03a_var

function testConst01(){
    const const01="const 01"
    {
        const const02="const 02"
        console.log("Dentro do bloco: 01a."+const01)
        console.log("Dentro do bloco: 01b."+const02)
    }
    const01 = "novo valor"
    console.log("Fora do bloco 02a."+const01)
    console.log("Fora do bloco 02b."+const02)
}

testConst01()