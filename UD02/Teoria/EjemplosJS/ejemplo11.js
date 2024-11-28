var personas = [
    { nombre: 'Pepe', edad: 45 },
    { nombre: 'Lucia', edad: 23 },
    { nombre: 'Jose', edad: 17 },
    { nombre: 'Pep', edad: 31 },
    { nombre: 'Olga', edad: 28 },
    { nombre: 'Juana', edad: 20 }
]

//Llamamos a sort y le pasamos como parámetro una funcion 
//que ordena por el campo nombre
personas.sort(function (a, b) {
    if (a.nombre < b.nombre) {
        return -1; // Si "a" es alfabeticamente anterior a "b"
    }

    if (a.nombre > b.nombre) {
        return 1; // Se "b" es alfabeticamente anterior a "a"
    }
    return 0;// si son iguales
});

//Llamamos a sort y le pasamos como parametro una funcion que ordena el campo por edad
//Ordenamos en ascendente, esta funcion de ordenacion es equivalente a la anterior
//pero mas simplificado.

personas.sort(function (a, b) {
    return b.edad - a.edad;
});

//if shorthand
(personas[0].edad < personas[1].edad) ? console.log("Es mayor") : null ;

