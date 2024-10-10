//Funcion estandar que devuelve la suma de dos numeros
function sumar(a, b) {
    return a + b;
}
console.log(sumar(1, 2));

//Funcion que recibe 3 parametros, siendo uno la funcion de sumar
function sumarTexto(x, y, aux) {
    console.log("A suma de x e y e " + aux(x, y));
}
//Le pasamos como parametros, 2 numeros y la funcion sumar()
sumarTexto(1, 2, sumar);

//Llamamos a la funcion sumarTexto, pasandole como parametro 2 numeros y una funcion anonima
sumarTexto(1, 2, function (a, b) { return a + b; });

//Llamamos a la funcion sumarTexto, pasandole como parametro 2 numeros y una funcion flecha
sumarTexto(1, 2, (a, b) => a + b);

//En una funcion sin parametros, podemos identificar si se han pasado argumentos haciendo uso de "arguments"
// arguments es un array donde se almacenan los parametros que se le han pasado a la funcion en su invocacion.
function parametros() {
    if (arguments.length == 0) {
        console.log("No se recibio ningun parametro");
    } else {
        console.log("Se recibieron " + arguments.length + " argumentos");
    }
}
parametros();
parametros(1, 2, 3);
parametros([1, 2, 3], (a, b) => a + b, "HolaMundo!");

//Queremos una funcion cantosNumeros() que reciba un numero indefinido de parametros e que
// indique cantos de eles son numeros
function cantosNumeros() {
    var conteo = 0;
    for (let valor of arguments) {
        if (isFinite(valor)){
            conteo++;
        }
    }
    console.log("Nº de numeros:" + conteo+ " de "+arguments.length+" elementos.");
}
cantosNumeros(2, 3, "Hola que tal", "2");


//Lo mismo que lo anterior usando array.filter pasandole una funcion, como "arguments" no es un array comun, asignamos su valor a arr. 
//la manera de declarar array.filter(elementoArray => comprobacion())
function cantosNumeros() {
    arr = Array.from(arguments);
    var resultados = arr.filter(elem => isFinite(elem));
    console.log("Nº de numeros:" + resultados.length + " elementos.");
}
cantosNumeros(2, 3, "Hola que tal", "2");
