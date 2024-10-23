//Recuperamos referencias de los elementos del formulario
var anadir = document.getElementById("anadir");
var leer = document.getElementById("leer");
var leerUno = document.getElementById("leerUno");
var modificar = document.getElementById("modificar");
var eliminar = document.getElementById("eliminar");

//Creacion de una BD de IndexeDB (habilitamos INDEXEDDB)
var nuevaDB = window.indexedDB;

//Comprobamos que la base de datos esta disponible

//Comprobamos si la base de datos esta definida.(Vamos, si existe)
if (nuevaDB) {
    var basedatos;//Declaramos un objeto que usaremos en la BD
}

//Declaramos una variable "solicitud" que resultara en intentar abrir nuestra BD(o crearla si no existe)
//El primer parametro es el nombre de la BD a abrir y el segundo es la version.
var solicitud = nuevaDB.open("BASE", 1);


//Definimos el comportamiento en caso de que la apertura tuviese exito
solicitud.onsuccess = () => {
    basedatos = solicitud.result; // Guardamos el resultado de la solicitud "basedatos";
    console.log("Se abrio la BD");
}

//Definimos el comportamiento, en caso de que la base de datos requiera actualizacion (es decir si queremos trabajar sobre ella)
solicitud.onupgradeneeded = () => {
    basedatos = solicitud.result; //Guardamos el resultado de la solicitud
    //Creamos un nuevo almacen de datos de nombre "coches" en la BD, indicando que los objetos contenidos en el mismo tendran un campo llamado "matricula"
    let almacenCoches = basedatos.createObjectStore("coches", { keyPath: "matricula" });
    console.log("Se creo el almacen de coches");
}

anadir.addEventListener("click", () => {
    //Abrimos una nueva transaccion contra el almacen coches en modo lectura-escritura
    let transaccion = basedatos.transaction(["coches"], "readwrite");
    
    //Recuperamos la referencia del almacen concreto sobre el que queremos trabajar
    let almacenCoches = transaccion.objectStore("coches");

    //Creamos un par de objetos para meter en la base de datos
    let coche1 = {
        matricula: "A-1234AB",
        modelo: "Austin Mini",
        motor:"1275cc"
    }
    
    let coche2 = {
        matricula: "8675-HTP",
        marca: "seat",
        modelo: "600",
        cor:"verde"
    }

    //Insertamos los objetos en la BD
    almacenCoches.add(coche1);
    almacenCoches.add(coche2);
    
})

leer.addEventListener("click", () => {
    //Abrimos una nueva transaccion contra el almacen de coches en modo lectura
    let transaccion = basedatos.transaction(["coches"], "readonly");

    //Recuperamos la referencia del almacen concreto sobre el que queremos trabajar
    let almacenCoches = transaccion.objectStore("coches");

    //Hacemos una solicitud de lectura a la base de datos, para eso abrimos un cursor
    let solicitudLectura = almacenCoches.openCursor();

    solicitudLectura.onsuccess = (evento) => {//
        //Guardamos la referencia al cursor
        let cursor = evento.target.result;

        //Si quedan datos por leer
        if (cursor) {
            console.log(cursor.value);
            cursor.continue();//Movemos el cursor a la siguiente posicion
        } else {
            console.log("Ya no hay mas elementos");
        }
    }

})

leerUno.addEventListener("click", () => {
    //Abrimos una nueva transaccion contra el almacen de coches en modo lectura
    let transaccion = basedatos.transaction(["coches"], "readonly");

    //Recuperamos la referencia del almacen concreto sobre el que queremos trabajar
    let almacenCoches = transaccion.objectStore("coches");

    //Hacemos una solicitud de lectura a la base de datos para solo el elemento por el valor de su clave primaria.
    let solicitudLectura = almacenCoches.get("A-1234AB");

    //Si la solicitud de solicitudLectura sale bien
    solicitudLectura.onsuccess = () => {
        //Si el resultado esta definido imprimimos el objeto.
        if (solicitudLectura.result) {
            console.log(solicitudLectura.result);
        } else {
            console.log("No hay ningun coche en la BD con esa matricula.")
        }
        
    }

})

modificar.addEventListener("click", (evento) => {
    //Usamos esto para evitar problemas en el comportamiento por defecto del evento "click"
    evento.preventDefault();
    //Abrimos una nueva transaccion contra el almacen de coches en modo lectura-escritura
    let transaccion = basedatos.transaction(["coches"], "readwrite");

    //Recuperamos la referencia del almacen concreto sobre el que queremos trabajar
    let almacenCoches = transaccion.objectStore("coches");

    //Creamos un objeto que modificara uno ya existente en la BD
    let coche = {
        matricula: "A-1234AB",
        modelo: "Mini Leyland Authi",
        motor: "1275cc",
        acabado: "1275GT",
        color: "Rojo"
    }

    //Hacemos una solicitud para modificar el coche con la matricula coincidente
    almacenCoches.put(coche);
    
})

eliminar.addEventListener("click", (evento) => {
    //Usamos esto para evitar problemas en el comportamiento por defecto del evento "click"
    evento.preventDefault();
    //Abrimos una nueva transaccion contra el almacen de coches en modo lectura-escritura
    let transaccion = basedatos.transaction(["coches"], "readwrite");

    //Recuperamos la referencia del almacen concreto sobre el que queremos trabajar
    let almacenCoches = transaccion.objectStore("coches");

    //hacemos una solicitud de borrado para el coche con la matricula coincidente
    almacenCoches.delete("8675-HTP");
    
})