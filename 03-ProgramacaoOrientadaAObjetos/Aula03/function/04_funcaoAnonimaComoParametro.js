function decisao (questao, doOk, doCancel) {
    if (questao=="OK") doOk()
    else doCancel();
}

decisao(
    "OK", 
    function() { console.log("Func Anonima como parametro. -You agreed."); }, 
    function() { console.log("Func Anonima como parametro. -You canceled the execution." ); }
);

// case sensitive
decisao(
    "Ok", 
    function() { console.log("Func Anonima como parametro. -You agreed."); }, 
    function() { console.log("Func Anonima como parametro. -You canceled the execution." ); }
);
