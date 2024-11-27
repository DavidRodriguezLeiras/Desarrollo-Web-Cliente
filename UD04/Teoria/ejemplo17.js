/*El patron de desenvolvemento Singleton, implica que una clase a la 
que se le aplique singleton sera de instancia unica */
class Configuracion {
    constructor() {
        //Comprobamos si ya existe una instancia, esto sirve para solamente tener una instancia de este objeto, esto es Singleton
        if (Configuracion.instancia) {
            //Devolvemos la instacia que ya existia.
            return Configuracion.instancia;  
        } else {
            this.config = {}; // Inicializamos la propiedad "config".
            Configuracion.instancia = this; // Inicializamos la instancia referenciando al propio objeto.
        }  
        

    }
    //Este metodo establece el valor de una propiedad del objeto "config" pasando tanto el nombre de la propiedad "llave"
    // como el nuevo "valor"
    establecer(llave, valor) {
        this.config[llave] = valor;
    }

    // Este metodo devuelve el valor de una propiedad de config a partir del nombre de la misma.
    obtener(llave) {
        return this.config[llave];
    }
};

var config = new Configuracion();
config.establecer("idioma","español");

var configuracion2 = new Configuracion();
configuracion2.establecer("modo", "oscuro");

//Al usar Singleton, ambos objetos Configuracion, config y configuracion2 son el mismo objeto.
console.log(configuracion2.obtener("idioma"));
console.log(config.obtener("modo"));