// Definimos una funcion obtenerDatos que devuelve una promesa
var cumplirPromesa = true;
function obtenerDato1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let datos = "Los datos 1 se obtuvieron correctamente.";
            if (cumplirPromesa) {
                resolve(datos);
            } else {
                reject("No se pudieron obtener los datos 1.");
            }
        }, 4000);
    });
}

function obtenerDato2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let datos = "Los datos 2 se obtuvieron correctamente.";
            if (cumplirPromesa) {
                resolve(datos);
            } else {
                reject("No se pudieron obtener los datos 2.");
            }
        }, 2000);
    });
}

function obtenerDato3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let datos = "Los datos 3 se obtuvieron correctamente.";
            if (cumplirPromesa) {
                resolve(datos);
            } else {
                reject("No se pudieron obtener los datos 3.");
            }
        }, 3500);
    });
}

//Declaramos tres promesas partiendo de las funciones anteriores
var promesa1 = obtenerDato1();
var promesa2 = obtenerDato2();
var promesa3 = obtenerDato3();

// Ejecutamos las promesas concurrentemente
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Todas las promesas se completaron: "+ resultados)
    })
    .catch((error) => {
        console.log("Por lo menos una promesa se rechazo: " + error)
    })
