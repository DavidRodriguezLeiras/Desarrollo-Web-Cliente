var btnAnadirDatos = document.getElementById("anadirDatos");
var btnLeerDatos = document.getElementById("leerDatos");

var personas = [
    { nombre: "David", edad:30},
    { nombre: "Juana", edad: 29 },
    { nombre: "Sabela", edad:31}
];

//Definimos una funcion que abrira la base de datos y creara el almacen de objetos
function abrirDB() {
    return new Promise((resolve, reject) => {
        let solicitudApertura = window.indexedDB.open("ESTUDIANTES", 1); //Solicitamos abrir/crear la BBDD "ESTUDIANTES"
        
        //Comportamiento en el caso de creacion/modificacion del almacen de objetos
        solicitudApertura.onupgradeneeded = (evento) => {
            evento.preventDefault();
            
            let baseDatos = evento.target.result; // Tomamos la referencia de la base de datos

            //Creamos el almacen de objetos "datoPersonas"
            baseDatos.createObjectStore("datosPersonas", { keyPath:"nombre" });
        }

        solicitudApertura.onsuccess = (evento) => {
            resolve(evento.target.result); //Si todo fue bien devolvemos la referencia a la BBDD
        }

        solicitudApertura.onerror = () => {
            reject("Error al abrir la BBDD"); //Si se falla al abrir la BBDD devolvemos este error.
        }
    })
}

function anadirDatos() {
    return abrirDB()
        .then((baseDatos) => {
            return new Promise((resolve, reject) => {
                let transaccion = baseDatos.transaction(["datosPersonas"], "readwrite"); //Abrimos una trasaccion de lectura/escritura
                let almacenPersonas = transaccion.objectStore("datosPersonas");//tomamos referencia del almacen de ojetos "datosPersonas"

                //Añadimos cada persona del array de personas al almacen de objetos "datosPersona"
                personas.forEach(persona => {
                    almacenPersonas.add(persona); 
                });

                //Gestionamos la finalizacion correcta de la transaccion
                transaccion.oncomplete = () => {
                    resolve("Todos los datos fueron introducidos correctamente");
                };

                //Gestionamos la finalizacion incorrecta de la transaccion
                transaccion.onerror = () => {
                    reject("Error al introducir los datos en la base de datos");
                };
            });
        })
        .catch((error) => {
            console.error(error);
        })
};

function leerDatos() {
    return abrirDB()
        .then((baseDatos) => {
            return new Promise((resolve, reject) => {
                let transaccion = baseDatos.transaction(["datosPersonas"], "readonly"); //Abrimos una trasaccion de solo lectura
                let almacenPersonas = transaccion.objectStore("datosPersonas");//tomamos referencia del almacen de ojetos "datosPersonas"

                let solicitudLectura = almacenPersonas.getAll(); // Hacemos una solicitud de lectura de todos los objetos que hay en el almacen "datosPersonas"
                
                solicitudLectura.onsuccess = (evento) => {
                    let contenidos = evento.target.result; //Recuperamos el resultado de la solicitud de lectura y lo guardamos en contenidos
                    contenidos.sort((a, b) => a.nombre == b.nombre); // ordenamos los objetos de contenidos por su atributo nombre
                    resolve(contenidos);
                }

                solicitudLectura.onerror = () => {
                    reject("Error al leer los datos de la base de datos");
                }
    
                //Gestionamos la finalizacion correcta de la transaccion
                transaccion.oncomplete = () => {
                    resolve("Todos los datos fueron introducidos correctamente");
                }
    
                //Gestionamos la finalizacion incorrecta de la transaccion
                transaccion.onerror = () => {
                    reject("Error al introducir los datos en la base de datos");
                }
            })
        })
        .catch((error) => {
            console.error(error);
         })
}

btnAnadirDatos.addEventListener("click", () => {
    anadirDatos()
        .then((resultado) => {
            console.log(resultado)
        })
        .catch ((error) => {
            console.error(error)
        })
});

btnLeerDatos.addEventListener("click", () => {
    leerDatos()
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.error(error)
        })
});