var cuadrado = document.getElementById("cuadrado");
var posicion = 0;

function mover() {
    posicion += 5; // Incrementamos la posicion
    cuadrado.style.left = posicion + "px"; //Actualizamos la posicion en css

    if (posicion < window.innerWidth - 50) {
        requestAnimationFrame(mover);
    }

    
}

mover();