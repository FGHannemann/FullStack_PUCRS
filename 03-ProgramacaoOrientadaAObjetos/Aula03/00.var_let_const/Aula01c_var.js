//Declarando variáveis utilizando var
//01c_var

function testVar01(){
    var var01="var 01"
    {
        console.log("Dentro do bloco: 01a."+var01)
        var var01= "var 02"
        console.log("Dentro do bloco: 02a."+var01)
    }
    var var01="var 03"
    console.log("Fora do bloco 03a."+var01)
}

testVar01()