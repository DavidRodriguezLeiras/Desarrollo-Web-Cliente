fetch("ejemploDatosJson.json").then(respuesta => {//fetch devuelve una promesa, por lo tanto usamos then
    if (!respuesta) { //Comprobamos si la respuesta es correcta, si no es asi generamos un error.
        throw new Error("Error de red:" + respuesta.status);
    } else {
        //Si la respuesta es correcta, transformamos la respuesta en un objeto y lo devolvemos o array de objetos si dentro del JSON hay un array de objetos.
        return respuesta.json();
    }
}).then(datos => { //Encadenamos el then anterior con uno nuevo, recogemos el array de objetos o el objeto que hemos devuelto en raspuesta.json() y lo asignamos a datos y lo mostramos.
    console.log(datos);
}).catch(error => { //Si la promesa anterior devuelve el error, mostramos el error.
    console.error(error);
})