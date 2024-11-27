var direccion1 = "https://jsonplaceholder.typicode.com/posts/1";
var direccion2 = "https://jsonplaceholder.typicode.com/posts/2";
var direccion3 = "https://jsonplaceholder.typicode.com/posts/3";

//Declaramos una funcion que hace una solicitud (fetch) a una URL y que devuelve una promesa
function solicitarDatos(url) {
    return fetch(url).then((respuesta) => {
        if (!respuesta) {
            throw new Error("La solicitud no obtuvo respuesta");
        } else {
            return respuesta.json();
        }
    });
};

//Invocamos la funcion haciendo una solicitud al servidor
solicitarDatos(direccion1)
    .then((datos) => {
        console.log(datos);
        return solicitarDatos(direccion2)
    })
    .then((datos) => {
        console.log(datos);
        return solicitarDatos(direccion3)
    })
    .then((datos) => {
        console.log(datos);
    })
    .catch((error) => {
        console.error(error)
    });