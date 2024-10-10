var conteo = 0;

function presionar() {
    conteo++;
    document.getElementById("texto").innerHTML="Se apreto el boton "+conteo+" veces."
}

document.getElementById("boton").addEventListener("mouseover", presionar);