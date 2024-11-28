//Extraemos las referencias de los campos input del formulario y la del propio formulario
//"document" siempre hace referencia al arbol DOM del documento HTML
//Mediante getElementById obtenemos una referencia al elemento DOM correspondiente con ese id
var nombre = document.getElementById('nombre');
var apellidos = document.getElementById('apellidos');
var edad = document.getElementById('edad');
var formulario = document.getElementById('formulario');

//Esta funcion otorga funcionalidad al boton guardar
function guardar() {
    
    //Extraemos los valores de los 3 inputs
    let valorNombre = nombre.value;
    let valorApellidos = apellidos.value;
    let valorEdad = edad.value;
    
    //Construimos un objeto persona utilizando los valores extraidos
    persona =  {
        nombre: valorNombre,
        apellidos: valorApellidos,
        edad: valorEdad,
    }

    console.log(persona);
}

//Esta funcion otorga funcionalidad al boton borrar
function borrar() {
    formulario.reset();
}

//Esta es la funcion que le da funcionalidad al boton llenar()
function llenar() {
    nombre.value = "Miro";
    apellidos.value = "Pereira";
    edad.value = 49;
}

