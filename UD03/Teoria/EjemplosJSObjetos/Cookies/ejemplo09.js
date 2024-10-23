//Creamos una serie de cookies
document.cookie = "username=David";
document.cookie = "pass=abc123.";
document.cookie = "lang=es";
document.cookie = "modo=dark";

//Imprimimos las cookies
console.log(document.cookie);
//Modificamos una cookie
document.cookie = "modo=bright";
console.log(document.cookie);
//Asignamos a la variable cookies todas la cookies separadas en arrays.
var cookies = document.cookie.split("; ");
console.log(cookies);

for (cookie of cookies) {
    let valor = cookie.split("="); // Separamos cada array de cookies en pares clave/valor
    //Si la clave es "pass" sacaremos por pantalla su valor o modificaremos el valor.
    if (valor[0] == "pass") {
        console.log(valor[1]);
    }
}

//Borramos todas la cookies
for (cookie of cookies) { //Recorremos todas la cookies del array
    let valor = cookie.split("=");//Separamos en clave => valor

    //Le agregamos la fecha de la epoca UNIX para caducarla
    document.cookie=valor[0] +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}
