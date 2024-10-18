//Inicializo todas as variables que necesitare.
var listaContactos = [];
var formulario = document.getElementById('formulario-contactos');
var codPostal = document.getElementById("codPostal");
var provincias = document.getElementById("provincia");
var nome = document.getElementById("nome");
var checknome = false;
var apelidos = document.getElementById("apelidos");
var checkapelidos = false;
var telefono = document.getElementById("telefono");
var checktelefono = false;
var email = document.getElementById("email");
var checkemail = false;
var codigosPostalesEspana = [
    { nombre: "Alava", cp: "01001" },
    { nombre: "Albacete", cp: "02001" },
    { nombre: "Alicante", cp: "03001" },
    { nombre: "Almeria", cp: "04001" },
    { nombre: "Asturias", cp: "33001" },
    { nombre: "Avila", cp: "05001" },
    { nombre: "Badajoz", cp: "06001" },
    { nombre: "Baleares", cp: "07001" },
    { nombre: "Barcelona", cp: "08001" },
    { nombre: "Burgos", cp: "09001" },
    { nombre: "Caceres", cp: "10001" },
    { nombre: "Cadiz", cp: "11001" },
    { nombre: "Cantabria", cp: "39001" },
    { nombre: "Castellon", cp: "12001" },
    { nombre: "Ciudad Real", cp: "13001" },
    { nombre: "Cordoba", cp: "14001" },
    { nombre: "Cuenca", cp: "16001" },
    { nombre: "Girona", cp: "17001" },
    { nombre: "Granada", cp: "18001" },
    { nombre: "Guadalajara", cp: "19001" },
    { nombre: "Guipuzcoa", cp: "20001" },
    { nombre: "Huelva", cp: "21001" },
    { nombre: "Huesca", cp: "22001" },
    { nombre: "Jaen", cp: "23001" },
    { nombre: "La Coruna", cp: "15001" },
    { nombre: "La Rioja", cp: "26001" },
    { nombre: "Las Palmas", cp: "35001" },
    { nombre: "Leon", cp: "24001" },
    { nombre: "Lerida", cp: "25001" },
    { nombre: "Lugo", cp: "27001" },
    { nombre: "Madrid", cp: "28001" },
    { nombre: "Malaga", cp: "29001" },
    { nombre: "Murcia", cp: "30001" },
    { nombre: "Navarra", cp: "31001" },
    { nombre: "Orense", cp: "32001" },
    { nombre: "Palencia", cp: "34001" },
    { nombre: "Pontevedra", cp: "36001" },
    { nombre: "Salamanca", cp: "37001" },
    { nombre: "Segovia", cp: "40001" },
    { nombre: "Sevilla", cp: "41001" },
    { nombre: "Soria", cp: "42001" },
    { nombre: "Tarragona", cp: "43001" },
    { nombre: "Santa Cruz de Tenerife", cp: "38001" },
    { nombre: "Teruel", cp: "44001" },
    { nombre: "Toledo", cp: "45001" },
    { nombre: "Valencia", cp: "46001" },
    { nombre: "Valladolid", cp: "47001" },
    { nombre: "Vizcaya", cp: "48001" },
    { nombre: "Zamora", cp: "49001" },
    { nombre: "Zaragoza", cp: "50001" },
    { nombre: "Ceuta", cp: "51001" },
    { nombre: "Melilla", cp: "52001" }
];
//habilito IndexedDB
var dbContactos = window.indexedDB;
//Creamos la BD ListaContactos o la abrimos si ya existe.
var solicitud = dbContactos.open("ListaContactos");

//Realizamos la solicitud de onupgradeneeded y guardamos el resultado en la variable basedatos, que usaremos para realizar las operaciones sobre la BD.
solicitud.onupgradeneeded = () => {
    var basedatos = solicitud.result;
    let listaCOntactos
}

/*
    Funcion para crear mensajes de error, se le pasa como parametro un elemento html y un mensaje.
    Esta funcion, crea un elemento parrafo, le agrega la clase "error" y el id del elemento que le pasamos como parametro como suyo y coloca el error antes del elemento que le pasamos en el parametro.
*/
function crearError(elemento, mensaje) {
    var parrafo = document.createElement("p");
    parrafo.className = "error";
    parrafo.id = elemento.id;
    parrafo.textContent = mensaje;
    elemento.parentNode.insertBefore(parrafo, elemento);
}

/*
    Funcion para limpiar errores del documento para que estos no se repitan si provocamos errores de seguido, toma como parametro un string con el id de un elemento,
    de esta manera no borraremos todos los errores, lo cual no seria correcto.
*/
function limpiarErrores(identificador) {
    Array.from(document.getElementsByClassName("error")).forEach((error) => {
        if (error.id == identificador) {
            error.remove();    
        }
    });
};

/*
    APARTADO 2:
    Rellenar el select con las provincias.

    Primero, creamos un elemento option vacio  y le añadimos el atributo selected.
    A continuacion, iteramos cada elemento del array codigosPostalesEspana y creamos un elemento de tipo opcion en cada iteracion,
    a este elemento se le da el valor del atributo cp del objeto que esta iterando y su textContent sera el atributo nombre.
*/
var opcionVacia = document.createElement("option");

provincias.appendChild(opcionVacia);
codigosPostalesEspana.forEach((elemento) => {
    let opcion = document.createElement("option");
    opcion.value = elemento.cp;
    opcion.textContent = elemento.nombre;
    opcion.id = elemento.nombre;
    provincias.appendChild(opcion);
})

/*
    APARTADO 2:
    Añadimos un evento de tipo keyup , este evento comprueba si el valor del elemento con id codPostal esta vacio.
    si no lo esta, deshabilita el elemento con id provincia y le quita el atributo selected al elemento opcionVacia.

    A continuacion, comprobamos si los valores introducidos cumplen el formato correcto (solo numeros, con longitud de 5 caracteres),si no cumple con el formato, mostramos un error,
    si cumple con el formato,iteramos cada tag option y comprobamos si los dos primeros digitos del
    atributo value del elemento codPostal coinciden con los dos primeros digitos del atributo value del objeto que esta iterando, y
    si es asi, le añadimos el atributo selected, si no, se lo quitamos.
*/
codPostal.addEventListener("keyup", () => {
    limpiarErrores(document.getElementById("lprovincia").id);
    if (codPostal.value != "") {
        document.getElementById("provincia").disabled = true;
        opcionVacia.defaultSelected = false;
        if (/[0-9]{5}/.test(codPostal.value)) {
            Array.from(document.getElementsByTagName("option")).forEach((elemento) => {
                if (codPostal.value.substring(0, 2) == elemento.value.substring(0, 2)) {
                    elemento.defaultSelected = true;
                } else {
                    elemento.defaultSelected = false;
                }
            });
        } else {
            crearError(document.getElementById("lprovincia"),"* El CP no cumple con el formato correcto.")
        }
    } else {
        opcionVacia.defaultSelected = true;
        document.getElementById("provincia").disabled = false;
    }
});

/*
    APARTADO 5:VALIDACION

    Creo un evento por cada elemento input a validar, en todos ellos primero se limpian los errores que pueda haber, y se comprueba primero si hay algun 
    valor en el atributo value del elemento, y si hay algo, se comprueba la expresion regular correspondiente, si no cumple con la expresion regular, se muestra el mensaje de error y
    su variable booleana se pone en false,si se valida, el booleano correspondiente se pone en true, estos booleanos se usan mas adelante
    en las funciones de engadirContacto(), modificarContacto(),buscarContacto() y eliminarContacto() para cumplir su cometido como validaciones.
*/
nome.addEventListener("keyup", () => {
    limpiarErrores(document.getElementById("lapelidos").id);
    if (nome.value =="") {
        checknome = false;
    } else if (!/^[a-zA-z' -]+$/.test(nome.value)) {
        crearError(document.getElementById("lapelidos"), "* El formato de este campo es incorrecto.");
        checknome = false;
    } else {
        checknome = true;
    }
});

apelidos.addEventListener("keyup", () => {
    limpiarErrores(document.getElementById("ltelefono").id);
    if (apelidos.value =="") {
        checkapelidos = false;
    } else if (!/^[a-zA-z' -]+$/.test(apelidos.value)) {
        crearError(document.getElementById("ltelefono"), "* El formato de este campo es incorrecto.");
        checkapelidos = false;
    } else {
        checkapelidos = true;
    }
});

telefono.addEventListener("keyup", () => {
    limpiarErrores(document.getElementById("lemail").id);
    if (telefono.value =="") {
        checktelefono = false;
    } else if (!/^[0-9]+$/.test(telefono.value)) {
        crearError(document.getElementById("lemail"), "* El formato de este campo es incorrecto.");
        checktelefono = false;
    } else {
        checktelefono = true;
    }
});

email.addEventListener("keyup", () => {
    limpiarErrores(document.getElementById("lenderezo").id);
    var regexMail = /^[a-z][a-z0-9-_.]{1,18}[a-z0-9][@][a-z][a-z0-9-_.]{1,18}[a-z0-9][.][a-z]{2,4}$/;
    if (email.value =="") {
        checkemail = false;
    } else if (!regexMail.test(email.value)) {
        crearError(document.getElementById("lenderezo"), "* El formato de este campo es incorrecto.");
        checkemail = false;
    } else {
        checkemail = true;
    }
});

/*
    APARTADO 4: TRATAMIENTO DE DATOS

    Creo esta funcion llamada comprobarContactoExistente, para comprobar si el valor que pasamos como parametro
    a la funcion existe en el atributo nome de algun objeto del array listaContactos.

    Uso esta funcion en engadirContactos() para comprobar si existe alguno creado con ese nombre, y si es asi evitar su creacion.
    Tambien uso esta funcion en modificarContacto() para comprobar si estoy intentando modificar valores de un contacto inexistente
*/
function comprobarContactoExistente(nome){
    var checkusuario = true;
    listaContactos.forEach((elemento)=>{
        if(elemento.nome.toLowerCase() == nome.toLowerCase()) {
            checkusuario= false;
        }
    });
    return checkusuario;
}

/*
    PRACTICA ANTERIOR

    Funcion para ordenar y mostrar listaContactos, los ordena usando el campo nombre de cada objeto del array.
    Una vez ordenado, limpiamos el contenido del formulario listaxe-contactos y por cada objeto del array listaContactos, 
    creamos un elemento de tipo párrafo concatenando el valor de cada atributo de cada objeto y añadimos el elemento al formulario listaxe-contactos.
    ***
    En mis practicas anteriores, usaba el codigo de este metodo en las funciones de engadir, modificar y eliminar.
    En esta practica he decidido colocar ese codigo como una funcion y simplemente llamarla cuando la necesite.
*/
function actualizarListaContactos() {
    var listaxeContactos = document.getElementById('listaxe-contactos');

    listaContactos.sort(function (a, b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    listaxeContactos.textContent = ''; // Borramos el contenido anterior

    for(let contacto of listaContactos){
        let parrafo = document.createElement('p');
        parrafo.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", Email: " + contacto.email + ", Enderezo: " + contacto.enderezo;
        listaxeContactos.appendChild(parrafo);
    };
    formulario.reset();
    checknome = false;
    checkapelidos = false;
    checktelefono = false;
    checkemail = false;
}

/*
    *PRACTICA ANTERIOR*
    Formulario de alta de contactos

    Funcion engadirContacto(), primero almacenamos en variables todos los valores de los inputs, el formulario y el div donde listaremos los contactos
    posteriormente, añadimos al array listaContactos un nuevo objeto rellenando los atributos del objeto con los datos obtenidos.
*/
document.getElementById("engadir").addEventListener("click",() => {
    limpiarErrores(document.getElementById("lnome").id);
    var nome = document.getElementById('nome');
    var apelidos = document.getElementById('apelidos');
    var telefono = document.getElementById('telefono');
    var email = document.getElementById('email');
    var enderezo = document.getElementById('enderezo');
    var comentarios = document.getElementById('comentarios');
    if (checknome && checkapelidos && checktelefono) { // APARTADO 5: terminamos la validacion
        if (comprobarContactoExistente(nome.value)) {
            listaContactos.push({
                nome: nome.value,
                apelidos: apelidos.value,
                telefono: telefono.value,
                email: email.value,
                enderezo: enderezo.value,
                comentarios: comentarios.value
            });
            actualizarListaContactos();
        } else { // Colocamos los mensajes de error
            crearError(document.getElementById("lnome"), "* El contacto ya existe");
        }
    } else {// Colocamos los mensajes de error
        if (!checknome) {
            crearError(document.getElementById("lapelidos"), "*Para engadir, este campo es obligatorio.");            
        }
        if (!checkapelidos) {
            crearError(document.getElementById("ltelefono"), "*Para engadir, este campo es obligatorio.");
        }
        if (!checktelefono) {
            crearError(document.getElementById("lemail"), "*Para engadir, este campo es obligatorio.");
        }
    }
    actualizarListaContactos();
    
});

/*
    *PRACTICA ANTERIOR*
    Busca de contactos

    Funcion buscarContacto(), defino dos variables , "nome" que almacena el valor de la referencia del input con id nome
    y busqueda que de momento lo dejo undefined.

    Ahora haciendo uso de un bucle for-of sobre el array listaContactos comparo la variable "nome" pasada a minusculas con la funcion toLowerCase()
    con el atributo "nome" tambien en minusculas de cada objeto del array, una vez encuentra una coincidencia, hago copia del objeto que esta iterando 
    a la variable "busqueda" para posteriormente pasar el valor de cada atributo de "busqueda" al valor de cada campo del formulario.
*/
document.getElementById("buscar").addEventListener("click",() => {
    limpiarErrores(document.getElementById("lnome").id);
    var nome = document.getElementById('nome').value;
    var busqueda;
    if (checknome) {//APARTADO 5: nome es un campo requerido para poder buscar.
        if (!comprobarContactoExistente(nome)) {
            for (let i = 0; i < listaContactos.length; i++) {
                if (nome.toLowerCase() == listaContactos[i].nome.toLowerCase()) {
                    busqueda = { ...listaContactos[i] };
                }
            }
            document.getElementById('nome').value = busqueda.nome;
            document.getElementById('apelidos').value = busqueda.apelidos;
            document.getElementById('telefono').value = busqueda.telefono;
            document.getElementById('email').value = busqueda.email;
            document.getElementById('enderezo').value = busqueda.enderezo;
            document.getElementById('comentarios').value = busqueda.comentarios;
            checknome = true
            checkapelidos = true
            checktelefono=true
        } else {//APARTADO 5: Colocamos los mensajes de error.
            crearError(document.getElementById("lnome"), "* No se puede encontrar el contacto, no existe");
        }
    } else {// APARTADO5: error a mostrar si no pasa la validacion.
        crearError(document.getElementById("lapelidos"), "* Campo obligatorio para poder buscar.");
    }
    
});

/*
    *PRACTICA ANTERIOR*
    Extraigo el valor del input con id "nombre" , termino de validar los requerimientos para modificar, compruebo si el nombre coincide con el atributo nombre de algun objeto del
    array listaContactos,si no es asi, muestro un error indicando que ese contacto no existe, si es asi, modifico los campos que contengan algun valor. 
*/ 
document.getElementById("modificar").addEventListener("click", () => {
    limpiarErrores(document.getElementById("lnome").id);
    var datos = [document.getElementById('nome').value,
    document.getElementById('apelidos').value,
    document.getElementById('telefono').value,
    document.getElementById('email').value,
    document.getElementById('enderezo').value,
    document.getElementById('comentarios').value
    ];
    if (checknome && checkapelidos && checktelefono) { // APARTADO 5: terminamos la validacion.
        if (!comprobarContactoExistente(datos[0])) {  //APARTADO 4: no se puede modificar un contacto que no existe.
            for (let i = 0; i < listaContactos.length; i++) {
                if (listaContactos[i].nome == datos[0]) {
                    if (datos[1] != "") {
                        listaContactos[i].apelidos = datos[1];
                    }
                    if (datos[2] != "") {
                        listaContactos[i].telefono = datos[2];
                    }
                    if (datos[3] != "") {
                        listaContactos[i].email = datos[3];
                    }
                    if (datos[4] != "") {
                        listaContactos[i].enderezo = datos[4]
                    }
                    if (datos[5] != "") {
                        listaContactos[i].comentarios = datos[5]
                    }
                }
            }
            actualizarListaContactos();
        } else { //APARTADO 4: error a mostrar si el contacto no existe.
            crearError(document.getElementById("lnome"), "* Este contacto no se puede modificar, no existe");
        }
    } else {//APARTADO 5: errores que se muestran si no pasan la validacion
        if (!checknome) {
            limpiarErrores(document.getElementById("lapelidos").id);
            crearError(document.getElementById("lapelidos"), "* Para modificar, este campo es obligatorio.");
        }
        if (!checkapelidos) {
            limpiarErrores(document.getElementById("ltelefono").id);
            crearError(document.getElementById("ltelefono"), "* Para modificar, este campo es obligatorio.");
        }
        if (!checktelefono) {
            limpiarErrores(document.getElementById("lemail").id);
            crearError(document.getElementById("lemail"), "* Para modificar, este campo es obligatorio.");
        }
    }
    actualizarListaContactos();
});

/*
    PRACTICA ANTERIOR
    Eliminar contacto:
    Extraigo el valor del input con id "nome" y lo guardo en la variable "nome", a continuacion recorro el array de objetos
    busco ocurrencias de algun objeto cuyo atributo nombre sea igual que la variable "nome"
    cuando encuentro una ocurrencia, haciendo uso del contador del for, uso el metodo splice para eliminar el objeto del array.
*/
document.getElementById("eliminar").addEventListener("click",() => {
    limpiarErrores(document.getElementById("lnome").id);
    var nome = document.getElementById('nome').value;
    if (checknome) { //APARTADO 5: nome es un campo requerido para poder eliminar.
        if (!comprobarContactoExistente(nome)) { //APARTADO 4: no se puede eliminar un contacto que no existe
            for (let i = 0; i < listaContactos.length; i++) {
                if (listaContactos[i].nome.toLowerCase() == nome.toLowerCase()) {
                    listaContactos.splice(i, 1);
                }
            }
            actualizarListaContactos();
        } else { //APARTADO 4: error que se muestra si no existe el contacto.
            crearError(document.getElementById("lnome"), "* Este contacto no se puede borrar, no existe");
        }
    } else { //APARTADO 5: error que se muestra si no pasa la validacion.
        crearError(document.getElementById("lapelidos"), "* Campo obligatorio para poder borrar.");
    }
});


