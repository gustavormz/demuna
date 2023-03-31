import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import LayoutFullscreen from '../components/layout/fullscreen'
import InputBase from '../components/inputs/base'
import TableUsers from '../components/tables/TableUsers'
import DropDownMenu from '../components/inputs/dropdownmenu/DropDownMenu'

import UsersData from '../data/users.json'

const getValueFromEvent = event => event.target.value

const ViewUsers = ({
  dropDownMenuItems,
}) => {
  const [users, setUsers] = useState([])
  const [dropdownmenuSelectedValue, setDropdownmenuSelectedValue] = useState('Nombres')
  const [searchInputValue, setSearchInputValue] = useState('')
  const [usersToDisplay, setUsersToDisplay] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      setUsers(UsersData)
      setUsersToDisplay(UsersData)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    if (searchInputValue === '') {
      setUsersToDisplay(users)
      return
    }

    const dropdownmenuValueMap = {
      Nombres: 'nombres', 
      DNI: 'dni',
      'Teléfono': 'telefono', 
    }

    const usersFiltered = users.filter(user => {
      const keyToFilter = dropdownmenuValueMap[dropdownmenuSelectedValue]
      const valueToFilter = searchInputValue.toLowerCase()
      const userValueToMatch = user[keyToFilter].toLowerCase()
      return userValueToMatch.includes(valueToFilter)
    })

    setUsersToDisplay(usersFiltered)
  }, [dropdownmenuSelectedValue, searchInputValue])

  const dropdownMenuHandleOnChange = (event) => {
    setDropdownmenuSelectedValue(getValueFromEvent(event))
  }

  const searchInputHandleOnChange = (event) => {
    setSearchInputValue(getValueFromEvent(event))
  }

  return (
    <LayoutFullscreen>
      <DropDownMenu
        items={dropDownMenuItems}
        handleOnChange={dropdownMenuHandleOnChange}
        value={dropdownmenuSelectedValue} />
      <InputBase
        handleOnChange={searchInputHandleOnChange}
        value={searchInputValue}
        title='Type in a name'
        placeholder='Buscar por nombres' />
      <TableUsers users={usersToDisplay} /> 
    </LayoutFullscreen>
  )
}

ViewUsers.propTypes = {
  dropDownMenuItems: PropTypes.array,
}

ViewUsers.defaultProps = {
  dropDownMenuItems: ['Nombres', 'DNI', 'Teléfono'],
}

export default ViewUsers
