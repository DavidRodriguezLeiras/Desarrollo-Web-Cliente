var modulosRAM = [
  {tipo: "DDR4",formato: "DIMM",fabricante: "Corsair",capacidad: "16GB",frecuencia: "3200MHz",precio: 75},
  {tipo: "DDR4",formato: "SO-DIMM",fabricante: "Kingston",capacidad: "8GB",frecuencia: "2666MHz",precio: 40},
  {tipo: "DDR5",formato: "DIMM",fabricante: "G.Skill",capacidad: "32GB",frecuencia: "4800MHz",precio: 150},
  {tipo: "DDR4",formato: "DIMM",fabricante: "Crucial",capacidad: "64GB",frecuencia: "3600MHz",precio: 250},
  {tipo: "DDR3",formato: "SO-DIMM", fabricante: "Samsung",capacidad: "4GB",frecuencia: "1600MHz",precio: 20},
];

//Capturamos las referencias a los elementos HTML
var buscador = document.getElementById("busqueda");
var lista = document.getElementById("sugerencias");

//Funcion genera un string con los datos de un objeto de tipo memoria RAM
function datosRAM(modulo) {
    return modulo.tipo + " ," + modulo.formato + ", " + modulo.fabricante + ", " +
        modulo.capacidad + ", " + modulo.frecuencia + ", " +modulo.precio+"."
    
}

//Esta funcion filtrara los modulos de RAM cuyos datos coincidan con las palabras clave del buscador
function filtrarSugerencias(consulta) {
    let palabras = consulta.toLowerCase().split(" ");
    return modulosRAM.filter(modulo =>
        palabras.every(palabra => datosRAM(modulo).toLowerCase().includes(palabra))
    );
}

//Esta funcion actualiza la lista de sugerencias

function actualizarListado(consulta) {
    lista.replaceChildren(); // Vaciamos la lista
    if (!consulta) {
        return; // Si e buscador esta vacio no hacemos nada
    }

    let sugerencias = filtrarSugerencias(consulta);
    sugerencias.forEach((consulta) => {
        let item = document.createElement("li");
        item.textContent = datosRAM(consulta);
        lista.appendChild(item);
    });
}

buscador.addEventListener("input", () => {
    actualizarListado(buscador.value);// Llamamos a la funcion para filtrar sugerencias
});