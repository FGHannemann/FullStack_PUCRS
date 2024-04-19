function decisao (questao, doOk, doCancel) {
    if (questao=="OK") doOk()
    else doCancel();
}

let beOK = function showOk() { console.log("Func showOK atribuída a uma variável. -You agreed."); }

let beCancel = function showCancel() { console.log("Func showCancel atribuída a uma variável. -You canceled the execution." ); }

decisao("OK", beOK, beCancel);

// case sensitive
decisao("Ok", beOK, beCancel);
