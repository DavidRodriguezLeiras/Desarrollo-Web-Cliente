//Definimos la clase coche
class Coche {
    constructor(marca, modelo, carburante) { // Constructor de la clase coche
        this._marca = marca;
        this._modelo = modelo;
        this._carburante = carburante;
    }

    //Definicion de Setter
    set marca(pmarca) {
        this._marca=pmarca;
    }
    set modelo(pmodelo) {
        this._modelo=pmodelo;
    }
    set carburante(pcarburante) {
        this._carburante=pcarburante;
    }

    //Definicion de Getter
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    get carburante() {
        return this._carburante;
    }
}

var coche = new Coche("Toyota", "Auris", "gasolina");

console.log(coche);

//No necesitamos llamar a la funcion de setter y getter , se usan automaticamente 
//al modificar o sacar los atributos, para que esto funcione deben estar definidos.
coche.marca = "Mercedes"; //Estamos usando el setter
coche.carburante = "hibrido";//Estamos usando el setter
coche.modelo = "GLA";//Estamos usando el setter

console.log(coche);

console.log(coche.marca);//Estamos usando el getter
console.log(coche.modelo);//Estamos usando el getter
console.log(coche.carburante);//Estamos usando el getter
