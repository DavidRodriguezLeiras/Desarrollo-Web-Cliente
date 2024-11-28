
//Declaramos una promesa que espera 2 segundos para devolver un texto (Tambien podemos cambiar el codigo para que sea rechazada)
function obtenerDatos() {
    return promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            let datos = 100;
            resolve(datos);
        }, 4000);
    });
}

//Usamos la promesa llamando la funcion obtenerDatos(). No se mostraran los datos hasta que no este completa la ejecucion de la funcion (el setTimeout()).
obtenerDatos()
    //Codigo a ejecutar si se cumple la promesa
    .then(resultado => {
        console.log("Valor de los datos: " + resultado);
        return resultado;
    })
    .then(resultado2 => {
        resultado2 *= 2;
        console.log("Nuevo valor de los datos: " + resultado2);
        return resultado2;
    })
    .then(resultado3 => {
        resultado3 -= 30;
        console.log("Nuevo valor de los datos: " + resultado3);
    })
    //Codigo a ejecutar si no se cumple la promesa
    .catch(error => {
        console.error(error);
    });

