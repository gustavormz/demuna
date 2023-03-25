import { useEffect, useState } from 'react'

import LayoutFullscreen from '../components/layout/fullscreen'
import InputBase from '../components/inputs/base'
import TableUsers from '../components/tables/TableUsers'

import UsersData from '../data/users.json'

const ViewUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUsers = () => {
      setUsers(UsersData)
    }

    fetchUsers()

  }, [])

  return (
    <LayoutFullscreen>
      <InputBase title='Type in a name' placeholder='Buscar por nombres' />
      <TableUsers users={users} />
    </LayoutFullscreen>
  )
}

export default ViewUsers
