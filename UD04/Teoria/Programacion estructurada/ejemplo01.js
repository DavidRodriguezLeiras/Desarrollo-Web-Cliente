var nivel0 = "variable de nivel 0";
console.log(nivel0);
//console.log(nivel1A); // Da un error de referencia por que la variable nivel1A no esta en el mismo ambito y por lo tanto no puede hacer hoisting.
//console.log(nivel1B);

fNivel1A();// Funciona por que esta declarado en el ambito global que es el mismo ambito en el que es llamada la funcion, por lo tanto el hoisting si que funcionara.

function fNivel1A() {
    var nivel1A = "variable de nivel 1 de la funcion 1A";
    console.log(nivel0); //Funciona
    console.log(nivel1A); //Funciona
    //console.log(nivel1B); No funciona , da error de referencia.

    fnivel2A();
    fnivel2B();

    function fnivel2A() {
        var nivel2A = "variable de nivel 2A";
        console.log(nivel0); //Funciona
        console.log(nivel1A); //Funciona
        console.log(nivel2A); //Funciona
        fnivel2B(); // No lee la variable nivel2A en su ejecucion, aun llamando a la funcion dentro de este ambito, dado que la declaracion de nivel2A y la declaracion de la funcion
                    // estan en ambitos distintos.
    }

    
    function fnivel2B() {
        var nivel2B = "variable nivel2B";
        console.log(nivel0); //Funciona
        console.log(nivel1A); //Funciona
        console.log(nivel2A); //No funciona, distinto ambito.
        console.log(nivel2B); //Funciona
    }
}

