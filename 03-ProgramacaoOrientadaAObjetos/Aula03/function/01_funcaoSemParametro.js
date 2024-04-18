//Funções sem parâmetro
function funcaoSemRetorno() {
    console.log("Sem retorno, apenas exibe a msg no console!");
}

function funcaoComRetorno() {
    return "Retornando Alô mundo!";
}

let msg = funcaoSemRetorno()
console.log(msg)

msg = funcaoComRetorno()
console.log(msg)
