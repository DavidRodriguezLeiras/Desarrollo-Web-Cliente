import { useState } from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard'

export function App() {
    const formatUserName=(userName) =>`@${userName}`
    const davidrl={userName:'ZetsukTheOne',imagen:'Goose',inicialEstaSiguiendo:true}
    const [name,setName]=useState('David Rodriguez Leiras')
    const cambiarNombre=()=>{
        (name=='David Rodriguez Leiras') ?  setName('davidrlModificado'):setName('David Rodriguez Leiras')
    }
    const users = [
        {
            userName:'Vaati',imagen:'Vaati',inicialEstaSiguiendo:true,name:'True Form Vaati'
        },
        {
            userName:'IñakiLoco',imagen:'Piedra',name:'IñakiTu',inicialEstaSiguiendo:true
        }
    ]
    return (
        <section className='App'>
            {/* Generar componentes desde un array,
                **IMPORTANTE** 
                Cada elemento que hacemos desde un array debe tener un atributo "key" unico para que el DOM
                pueda reconocerlo.
            */}
            {
                users.map(user =>{
                    const {userName,imagen,name,inicialEstaSiguiendo} = user
                    return (
                        <XFollowCard 
                            key={userName} 
                            formatUser={formatUserName}
                            userName={userName}
                            imagen={imagen}
                            inicialEstaSiguiendo={inicialEstaSiguiendo}
                        >{name}</XFollowCard>
                    )
                })
            }

            {/* Generar componentes directamente */}
            <XFollowCard 
                formatUser={formatUserName}
                {...davidrl}
            >
                <strong>{name}</strong>
            </XFollowCard>

            <XFollowCard 
                formatUser={formatUserName}  
                imagen='Frog' 
            >
                <strong>Pepito dus Palotes</strong>
            </XFollowCard>
            <button onClick={cambiarNombre}>Cambiar nombre</button>
        </section>
    )
}