//Declarando variáveis utilizando var
//01a_var

function testVar01(){
    var var01="var 01"
    {
        var var02= "var 02"
        console.log("Dentro do bloco: 01a."+var01)
        console.log("Dentro do bloco: 01b."+var02)
    }
    console.log("Fora do bloco 02b."+var01)
    console.log("Fora do bloco 02b."+var02)
}

testVar01()