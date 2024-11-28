let cumplirPromesa = false;

//Declaramos el ejecutor de la primesa
var ejecutor = (resolve, reject) => {
    setTimeout(() => {
        let datos = "Los datos se obtuvieron correctamente.";
        if (cumplirPromesa) {
            resolve(datos);
        } else {
            reject("No se pudieron obtener los datos.");
        }
    },4000);
}

//Declaramos una promesa que espera 2 segundos para devolver un texto (Tambien podemos cambiar el codigo para que sea rechazada)
var promesa = new Promise(ejecutor);

// Definimos una funcion obtenerDatos que devuelve una promesa
function obtenerDatos() {
    return promesa;
}

//Usamos la promesa llamando la funcion obtenerDatos(). No se mostraran los datos hasta que no este completa la ejecucion de la funcion (el setTimeout()).
obtenerDatos()
    //Codigo a ejecutar si se cumple la promesa
    .then(resultado => {
        console.log(resultado);
        console.log("Hola Mundo!");
    })
    //Codigo a ejecutar si no se cumple la promesa
    .catch(error => {
        console.error(error);
    });

