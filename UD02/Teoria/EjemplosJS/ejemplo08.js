//recorrer colecciones

var deportes = ["Futbol", "Basket", "Tenis", "Rugby"];

//Recorremos con el bucle for
for (let i = 0; i < deportes.length; i++){
    console.log(deportes[i]);
}
//Foreach en JS
deportes.forEach(element => {
    console.log(element);   
});

//Bucle for-of (toma el array elemento a elemento)
for (let deporte of deportes) {
    console.log(deporte); 
}
//Bucle for-in (toma el indice de cada elemento del array)
for (let indice in deportes) {
    console.log(deportes[indice]); 
}