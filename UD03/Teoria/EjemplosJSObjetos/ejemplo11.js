//Creacion de un atributo a traves de sus datos
//Recuperamos la referencia al objeto texto
var texto = document.getElementById("texto");
//Nuevo atributo a partir de sus datos.
texto.setAttribute("almacen", "Nuevo atributo creado desde JS");

//Creacion de un atributo como objeto
//Creamos el atributo
var nuevoAtributo = document.createAttribute("almacen2");
nuevoAtributo.value = "Este es el segundo atributo añadido";
//Añadimos el atributo
texto.setAttribute(nuevoAtributo);

//Acceso a un atributo
//Guardamos la referencia del atributo "almacen" de texto
var atributoAlmacen = texto.getAttributeNode("almacen");
//sacamos por consola el valor de ese atributo
console.log(atributoAlmacen.value);
//sacamos por consola el nombre del atributo
console.log(atributoAlmacen.name);

//Modificacion del atributo
atributoAlmacen.value = "Cambio de valor!!";

//Modificacion de un atributo (trabajando directamente con sus datos)
texto.setAttribute("almacen", "Nuevos datos de almacen");

//Eliminacion de un atributo
texto.removeAttribute("almacen");

