import React from 'https://esm.sh/react@19/?dev'
import ReactDOMClient from 'https://esm.sh/react-dom@19/client?dev'
const appDomElement = document.getElementById('app')
// Todo va dentro de root, es la base donde se almacenan los componentes
const root = ReactDOMClient.createRoot(appDomElement)

// Creamos elementos de react con createElement(tag, {atributo1:valor,atributo2:valor},texto)
const button = React.createElement('button', { 'data-id': 123 }, 'Boton 1')
const button2 = React.createElement('button', { 'data-id': 456 }, 'Boton 2')
const button3 = React.createElement('button', { 'data-id': 789 }, 'Boton 3')

// Si queremos renderizar mas de un elemento a la vez, tenemos como contenedor React.fragment, y le pasamos como tercer parametro
// un array con los elementos creados
const app = React.createElement(React.Fragment, null, [button, button2, button3])

// Renderizamos el contenedor con los componentes
root.render(app)

/*

Arriba podemos ver React usado con JS vanilla

La manera facil y recomendada de crear componentes y usar React es usando archivos JSX, lo que observamos arriba
se hace con JSX  de la siguiente manera

<React.Fragment>
    <button data-id="123">Boton 1</button>
    <button data-id="456">Boton 2</button>
    <button data-id="789">Boton 3</button>
</React.Fragment

*/
