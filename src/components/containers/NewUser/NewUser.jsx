import './styles.css'
import InputBase from '../../inputs/base'
import { useEffect, useState } from 'react'
import ButtonNewUser from '../../buttons/newuser'

const getValueFromEvent = event => event.target.value

const NewUser = () => {
    const[nombres, setNombres] = useState('')
    const[appat, setApPat] = useState('')
    const[apmat, setApMat] = useState('')
    const[dni, setDni] = useState('')

    const InputName_HandleOnChange = (event) => {
      setNombres(getValueFromEvent(event))
    }

    const InputApPat_HandleOnChange = (event) => {
      setApPat(getValueFromEvent(event))
    }

    const InputApMat_HandleOnChange = (event) => {
      setApMat(getValueFromEvent(event))
    }

    const InputDni_HandleOnChange = (event) => {
      setDni(getValueFromEvent(event))
    }

    return (
        <div className="div-newuser-root">
            <InputBase searchInputPlaceHolder={"Nombres"} searchInputHandleOnChange={InputName_HandleOnChange} searchInputValue={nombres}/>
            <InputBase searchInputPlaceHolder={"Apellido Paterno"} searchInputHandleOnChange={InputApPat_HandleOnChange} searchInputValue={appat}/>
            <InputBase searchInputPlaceHolder={"Apellido Materno"} searchInputHandleOnChange={InputApMat_HandleOnChange} searchInputValue={apmat}/>
            <InputBase searchInputPlaceHolder={"DNI"} searchInputHandleOnChange={InputDni_HandleOnChange} searchInputValue={dni}/>
            <ButtonNewUser/>
        </div>
        
    )
}

export default NewUser