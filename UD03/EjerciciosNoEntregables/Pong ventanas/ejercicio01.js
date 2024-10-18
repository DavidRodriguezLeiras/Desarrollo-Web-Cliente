/*
Queremos una pagina web que abra una ventana de 300x300 pixeles de color negra de fondo con una posicion inicial que sera pegado arriba a la izquierda de la pantalla y centrada en la vertical.

la ventana tendra que moverse 1 pixel a la derecha cada 5ms, y al llegar al otro lado, rebotar, y asi de seguido.

Necesitaremos: window.open , window.moveTo, screen.availHeight , screen.outerHeight, screen.availWidth, screen.outerWidth.

Declaramos una funcion que va a permitir "dormir" el navegador durante un tiempo especificado, usando Promises 
*/


function dormir() {
    return new Prosime(resultado => setTimeout(resultado, tiempo));
}

async function rebotarVentana() {
    var ventana = window.open("ejercicio01.1.html");
    
}