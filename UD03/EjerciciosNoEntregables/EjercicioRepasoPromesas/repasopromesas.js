var inputFile = document.getElementById("fichero");
var contenidoFichero = document.getElementById("contenidoFichero");

function cargarArchivo(fichero) {
    return new Promise((resolve, reject) => {
        if (fichero) {
            let lector = new FileReader();
            lector.readAsText(fichero);
            lector.onload = () => {
                console.log(lector.result);
                resolve(lector.result);
            }
            lector.onerror = () => {
                reject(new Error("No se pudo leer"))
            }
        }
    })
}

inputFile.addEventListener("change", (evento) => {
    cargarArchivo(evento.target.files[0]).then((resultado) => {
        document.getElementById("contenidoFichero").textContent = resultado;
        cargarArchivo(evento.target.files[0]);
    })
    .then(() => {
    console.log("Se cargo el contenido.")
    })
    .catch((error) => {
            console.error(error);
    })
});