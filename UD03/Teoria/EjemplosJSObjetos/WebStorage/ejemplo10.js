//Declaramos una funcion que va a permitir "dormir" el navegador durante un tiempo especificado
//en ms usando promesas
function dormir(tiempo) {
    return new Promise(resultado => setTimeout(resultado, tiempo));
}

async function trabajarConWS() {
    sessionStorage.setItem("username", "david");//Agregamos el item de clave username
    await dormir(5000);
    sessionStorage.removeItem("username");//Eliminamos el item de clave username
    await dormir(5000);
    sessionStorage.setItem("username", "Enma"); // Agregamos un item a WS
    console.log(sessionStorage.getItem("username")); //Accedemos al item de clave username
    console.log(sessionStorage.key("username")); //Consultamos la posicion del item username
    await dormir(5000);
    sessionStorage.clear();
}

trabajarConWS();