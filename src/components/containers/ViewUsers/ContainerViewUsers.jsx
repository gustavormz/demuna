import React from 'react'
import InputBusqueda from '../../inputs/busqueda'
import DropDownMenu from '../../inputs/dropdownmenu'
import './styles.css'

const ContainerViewUsers = () => {
    return(
        <div className="div-general">
            <div>
                <DropDownMenu items={["Nombres", "DNI", "Telefono"]} />
            </div>
            <div>
                <InputBusqueda placeholder='Ingrese texto a buscar'/>
            </div>
        </div>
    )
}

export default ContainerViewUsers