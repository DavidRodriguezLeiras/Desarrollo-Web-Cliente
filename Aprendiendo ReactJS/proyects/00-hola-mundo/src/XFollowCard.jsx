import { useState } from "react" //Importamos esto para proveer de "estado" al componente, esto es un hook

export function XFollowCard({ children, userName = 'PatadeFrango',formatUser,imagen,inicialEstaSiguiendo}){
    //2 ,ameras de poner el estado

    //Version shorthand
    const [estaSiguiendo,setEstaSiguiendo]=useState(inicialEstaSiguiendo)

    const handleClick = ()=>{
        setEstaSiguiendo(!estaSiguiendo);
    }

    /* Los estados tienen 2 posiciones o valores, el primer valor o posicion es el valor del estado, 
    el segundo es lo que cambia su valor 

    //Version larga
    const estado = useState(false); // Ponemos el valor por defecto en el estado.
    const estaSiguiendo=state[0]
    const setEstaSiguiendo=state[1] // state[1] es la funcion del estado que nos permite cambiar el valor
    */

    const texto=estaSiguiendo ? 'Siguiendo':'Seguir'
    const claseBoton=estaSiguiendo ? 'tw-followCard-button esta-siguiendo' : 'tw-followCard-button'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${imagen}`} alt="Avatar DavidRL" />
                <div>
                    <strong className='tw-followCard-name'>{children}</strong>
                    <span className='tw-followCard-subname'>{formatUser(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={claseBoton} onClick={handleClick}>{texto}</button>
            </aside>
        </article>
    )
}