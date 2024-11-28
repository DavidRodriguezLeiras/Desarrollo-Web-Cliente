//Declaramos una funcion que va a permitir "dormir" el navegador durante un tiempo especificado
//en ms usando promesas

function dormir(tiempo) {
    return new Promise(resultado => setTimeout(resultado, tiempo));
}

//Declaramos una funcion asincrona para poder usar la funcion dormir
async function trabajarConCookies() {
    //Creamos una cookie
    document.cookie = "username=David, expires=Wed, 16 Oct 2024 19:45:00 UTC";
    await dormir(5000); //Esperamos 5 segundos
    document.cookie = "username=Enma, expires=Wed, 16 Oct 2024 19:45:00 UTC";
    await dormir(5000); 
    document.cookie = "username=expires=Wed, 16 Oct 2024 13:45:00 UTC";
}
trabajarConCookies();


