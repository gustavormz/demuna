import LayoutFullScreen from "../components/layouts/fullscreen"
import ContainerViewUsers from "../components/containers/ViewUsers"
import { useEffect, useState } from 'react'
import UsersData from "../data/users.json"

const getValueFromEvent = event => event.target.value

const ViewUsers = () => {
    const[users, setUsers] = useState([])
    const[selectoptionSelectedValue, setSelectoptionSelectedValue] = useState('Nombres')
    const[searchInputValue, setSearchInputValue] = useState("")
    const[usersToDisplay, setUsersToDisplay] = useState([])

    useEffect(() => {
        const fetchUsers = () => {
            const UsersDataMapped = UsersData.map(element => {
                element.apellidosynombres = `${element.apellidopaterno} ${element.apellidomaterno} ${element.nombres}`
                return element
            })
            setUsers(UsersDataMapped)
            setUsersToDisplay(UsersDataMapped)
        }
        fetchUsers()
    }, [])

    //Search functionality
    useEffect(() => {
        if(searchInputValue === ""){
            setUsersToDisplay(users)
            return
        }
        const selectoptionValueMap = {
            Nombres: 'apellidosynombres',
            DNI: 'dni',
            'Teléfono': 'telefono',
            'Dirección': 'direccion',
        }

        const usersFiltered = users.filter(user => {
            const keyToFilter = selectoptionValueMap[selectoptionSelectedValue]
            const valueToFilter = searchInputValue.toLowerCase()
            const userValueToMatch = user[keyToFilter].toLowerCase()
            return userValueToMatch.includes(valueToFilter)
        })
        setUsersToDisplay(usersFiltered)
    }, [users, selectoptionSelectedValue, searchInputValue])

    const selectoptionHandleOnChange = (event) => {
        setSelectoptionSelectedValue(getValueFromEvent(event))
        setSearchInputValue("")
    }

    const searchInputHandleOnChange = (event) => {
        setSearchInputValue(getValueFromEvent(event))
    }

    return(
        <LayoutFullScreen>
            <ContainerViewUsers            
                selectOptionHandleOnChange={selectoptionHandleOnChange}
                selectOptionItems={['Nombres','DNI','Dirección','Teléfono']}
                selectOptionValue={selectoptionSelectedValue}

                searchInputHandleOnChange={searchInputHandleOnChange}
                searchInputValue={searchInputValue}
                searchInputPlaceHolder='Ingrese texto a buscar'

                UsersData={usersToDisplay}
                
                numberOfRowsText={"Mostrando "+usersToDisplay.length+" de "+users.length+" elementos"}/>
        </LayoutFullScreen>
    )
}

export default ViewUsers