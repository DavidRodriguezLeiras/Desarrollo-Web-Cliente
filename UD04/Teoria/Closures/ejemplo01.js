//Ejemplo basico de closure
var incrementar = (function () {
    var contador = 0;
    return function () {
        return ++contador;
    }
});
incrementar();
incrementar();
incrementar();

//Esta funcion devuelve otra funcion encargada de incrementar el contador
function crearContador() {
    var contador = 0;
    return function () {
        contador++;
        console.log(contador);
        return contador;
    }
}

//Los closure sirven para guardar una funcion y un ambito en una variable.
var incrementar2 = crearContador(); //Guardamos la funcion creada previamente en la variable incrementar2, es basicamente lo mismo que el ejemplo anterior
incrementar2();
incrementar2();
