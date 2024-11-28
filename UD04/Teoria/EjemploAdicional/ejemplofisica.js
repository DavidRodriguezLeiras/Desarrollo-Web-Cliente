var pelota = document.getElementById("pelota");
var cuadro = document.getElementById("cuadro");
var posicionInput = document.getElementById("posicion");
var velocidadInput= document.getElementById("velocidad");
var gravedadInput = document.getElementById("gravedad");
var resistenciaInput = document.getElementById("resistencia");
var botonReset = document.getElementById("resetear");
var botonApply = document.getElementById("aplicar");

// Establecemos las variables que gobernaran en las fisicas del simulador

/*
var velocidad = 0; // Velocidad inicial de la pelota
var posicion = cuadro.offsetHeight / 2 - pelota.offsetHeight / 2; // Posicion inicial en el medio vertical del cuadro.
var gravedad = 0.5; //Valor que incrementa la velocidad en cada fotograma.
var resistencia = 1; // Factor que reduce la velocidad en cada rebote.
*/
var velocidad = parseFloat(velocidadInput.value);
var posicion = parseFloat(posicionInput.value);
var gravedad = parseFloat(gravedadInput.value);
var resistencia = parseFloat(resistenciaInput.value);

botonApply.addEventListener("click", () => {
    velocidad = parseFloat(velocidadInput.value);
    posicion = parseFloat(posicionInput.value);
    gravedad = parseFloat(gravedadInput.value);
    resistencia = parseFloat(resistenciaInput.value);

    pelota.style.top = posicion + "px";
    
});

botonReset.addEventListener("click", () => {
    posicionInput.value = 200;
    gravedadInput.value = 0.5;
    velocidadInput.value = 0;
    resistenciaInput.value = 0.7;

    velocidad = parseFloat(velocidadInput.value);
    posicion = parseFloat(posicionInput.value);
    gravedad = parseFloat(gravedadInput.value);
    resistencia = parseFloat(resistenciaInput.value);

    pelota.style.top = posicion + "px";
});




//Esta funcion se va a ejecutar en cada cambio de fotograma.
function animar() {
    velocidad += gravedad; // Incrementamos la velocidad teniendo en cuenta la gravedad.
    posicion += velocidad; // Incrementamos la posicion teniendo en cuenta la velocidad.

    //Comprobamos si la pelota llego al suelo (con la parte inferior del div cuadro)
    if (posicion + pelota.offsetHeight > cuadro.offsetHeight) {
        posicion = cuadro.offsetHeight - pelota.offsetHeight; // Ajustamos la posicion de la pelota para que no pase a traves del suelo.

        velocidad = -velocidad * resistencia; // Invertimos el sentido de la velocidad y la reducimos aplicandole el factor resistencia.

    }

    //Situamos la pelota en su nueva posicion
    pelota.style.top = posicion + "px";

    //Llamamos a animar en el siguiente fotograma
    requestAnimationFrame(animar);
}

//Establecemos la posicion inicial de la pelota en el medio del cuadro
pelota.style.top = posicion + "px";

//Comenzamos la animacion
animar();