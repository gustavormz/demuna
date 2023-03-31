import React from 'react'
import './styles.css'

const InputBusqueda = ({
    placeholder = ''
}) => {
    return(
        <input className='input-busqueda-root' placeholder={placeholder}/>
    )
}

export default InputBusqueda