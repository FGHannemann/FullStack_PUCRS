function decisao (questao, doOk, doCancel) {
    if (questao=="OK") doOk()
    else doCancel();
}

function showOk() { console.log("Func showOK como parametro. -You agreed."); }

function showCancel() { console.log("Func showCancel como parametro. -You canceled the execution." ); }

decisao("OK", showOk, showCancel);

// case sensitive
decisao("Ok", showOk, showCancel);
