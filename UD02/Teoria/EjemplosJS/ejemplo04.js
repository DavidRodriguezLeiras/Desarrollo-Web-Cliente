//El operador de propagacion sobre arrays
var provinciasNorte = ["A Coruna", "Lugo"];
var provinciaSur = ['Ourense', 'Pontevedra'];

//Concatenamos los dos arrays
var provincias = [...provinciasNorte, ...provinciaSur];
console.log(provincias);

//Realizamos una copia "por valor"
var copia = [...provincias];
copia[0] = "Salamanca";
console.log(provincias);

//Desestructurar arrays (asignar nombres a sus partes)
var [uno, dos, ...resto] = [1, 2, 3, 4, 5, 6];
console.log(uno);
console.log(dos);
console.log(resto);

//Realizamos una asignacion "por referencia"
var referencia = provincias;

//Operador de propagacion sobre objetos

var persona = {
    nombre: "Xiana Leira Fonte",
    edad: 30
};

var datos = {
    direccion: "Calle Monfero,5,Ferrol",
    telefono: 654321000
};

//Combinar objetos
var datosCompletos = { ...persona, ...datos };

console.log(datosCompletos);

//Realizar una copia por valor del objeto
var copiaObjeto = {...persona };
copiaObjeto.nombre = "Lucia";

console.log(persona);
console.log(copiaObjeto);

//Desestructurar Objetos,los elementos que vamos a "separar", la variable tiene que llevar el mismo nombre
var {nombre, ...datosResto } = {
    nombre: "Juan",
    edad: 30,
    Pais: "Espana"
};

console.log(nombre);
console.log(datosResto);

//Desestructurar Objetos tomando los valores que queramos
var cosa = {
    id: 12,
    desc: "numero 12",
    algoMas: "Algo mas",
    esObjeto: true
};

var { id, algoMas } = cosa;

console.log(id);
console.log(algoMas);


