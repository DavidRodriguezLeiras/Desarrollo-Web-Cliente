var listaContactos = [];
var formulario = document.getElementById('formulario-contactos');
/*
    *PRACTICA ANTERIOR*
    Apartado 2 - formulario de alta de contactos

    Funcion engadirContacto(), primero almacenamos en variables todos los valores de los inputs, el formulario y el div donde listaremos los contactos
    posteriormente, añadimos al array listaContactos un nuevo objeto rellenando los atributos del objeto con los datos obtenidos.

    Ahora ordenamos los objetos comparando el atributo "nome" de cada uno pasandolo a minusculas usando el metodo toLowerCase().

    Una vez ordenados, borramos el contenido del div de la lista de contactos cambiando el valor de su atributo innerHTML por ''.
    
    A continuacion usando un bucle for-of sobre el array de objetos, en cada iteracion crearemos una variable parrafo y almacenamos dentro de ella una etiqueta <p>
    usando el metodo document.createElement(), almacenamos en el atributo textContent de esta variable un string en el que concatenamos los campos a mostrar
    en el formato indicado en el ejercicio.

    Finalmente , en la variable donde hemos guardado la referencia al div de la lista de contactos , haciendo uso del metodo appendChild() pasamos como parametro
    la variable parrafo, para agregar dentro del div la etiqueta <p> con la informacion del contacto dentro.

    Una vez hecho esto reseteamos el formulario usando el metodo reset() sobre la variable que hace referencia al formulario.
*/
function engadirContacto() {

    var nome = document.getElementById('nome').value;
    var apelidos = document.getElementById('apelidos').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var enderezo = document.getElementById('enderezo').value;
    var comentarios = document.getElementById('comentarios').value;
    var listaxeContactos = document.getElementById('listaxe-contactos');
 
    listaContactos.push({
        nome: nome,
        apelidos: apelidos,
        telefono: telefono,
        email: email,
        enderezo: enderezo,
        comentarios: comentarios
    });
    
    listaContactos.sort(function (a,b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    })

    listaxeContactos.innerHTML = ''; // Borramos el contenido anterior

    for(let contacto of listaContactos){
        let parrafo = document.createElement('p');
        parrafo.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", Email: " + contacto.email + ", Enderezo: " + contacto.enderezo;
        listaxeContactos.appendChild(parrafo);
    };

    formulario.reset();
};

/*
    *PRACTICA ANTERIOR*
    Apartado 3 - busca de contactos

    Funcion buscarContacto(), defino dos variables , "nome" que almacena el valor de la referencia del input con id nome
    y busqueda que de momento lo dejo undefined.

    Ahora haciendo uso de un bucle for-of sobre el array listaContactos comparo la variable "nome" pasada a minusculas con la funcion toLowerCase()
    con el atributo "nome" tambien en minusculas de cada objeto del array, una vez encuentra una coincidencia, hago copia del objeto que esta iterando 
    a la variable "busqueda" para posteriormente pasar el valor de cada atributo de "busqueda" al valor de cada campo del formulario.

*/

function buscarContacto() {
    var nome = document.getElementById('nome').value;
    var busqueda;
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
};

/*
    Apartado 1: 
    Extraigo el valor del input con id "nombre" y busco ocurrencias en el
*/ 
function modificarContacto() {
    var listaxeContactos = document.getElementById('listaxe-contactos');
    var datos = [document.getElementById('nome').value,
        document.getElementById('apelidos').value,
        document.getElementById('telefono').value,
        document.getElementById('email').value,
        document.getElementById('enderezo').value,
        document.getElementById('comentarios').value
    ]

    for (let i = 0; i < listaContactos.length; i++){
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
    listaContactos.sort(function (a,b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    })
    listaxeContactos.innerHTML = ''; // Borramos el contenido anterior
    for(let contacto of listaContactos){
        let parrafo = document.createElement('p');
        parrafo.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", Email: " + contacto.email + ", Enderezo: " + contacto.enderezo;
        listaxeContactos.appendChild(parrafo);
    };
    formulario.reset();
}

/*
    Apartado 2: eliminar contactos
    Extraigo el valor del input con id "nome" y lo guardo en la variable "nome", a continuacion recorro el array de objetos
    busco ocurrencias de algun objeto cuyo atributo nombre sea igual que la variable "nome"
    cuando encuentro una ocurrencia, haciendo uso del contador del for, uso el metodo splice para eliminar el objeto del array.

*/
function eliminarContacto() {
    var listaxeContactos = document.getElementById('listaxe-contactos');
    var nome = document.getElementById('nome').value;
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].nome == nome) {
        listaContactos.splice(i, 1);
        }
    }
    listaContactos.sort(function (a,b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    })
    listaxeContactos.innerHTML = ''; // Borramos el contenido anterior
    for(let contacto of listaContactos){
        let parrafo = document.createElement('p');
        parrafo.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", Email: " + contacto.email + ", Enderezo: " + contacto.enderezo;
        listaxeContactos.appendChild(parrafo);
    };
};

