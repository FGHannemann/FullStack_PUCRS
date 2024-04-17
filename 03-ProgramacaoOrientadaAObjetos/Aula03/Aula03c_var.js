//Declarando variáveis utilizando var
//03c_var

function testConst01(){
    const const01={propriedade: "valor"}
    console.log("01a."+const01.propriedade)

    const01 = {propriedade: "valor alterado"}
    console.log("02a."+const01.propriedade)
}

testConst01()