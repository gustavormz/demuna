import React from 'react'
import './styles.css'

const TableUsers = ({
  users = []
}) => {

  const renderUserRow = (user) => {
    const fullName = `${user.apellidopaterno} ${user.apellidomaterno} ${user.nombres}`
    const birthDate = user.fechanac || '----'
    const phoneNumber = user.telefono || '----'

    return (
      <tr>
        <td>{fullName}</td>
        <td>{user.dni}</td>
        <td>{birthDate}</td>
        <td>{phoneNumber}</td>
        <td>{user.direccion}</td>
        <td>
          <p>Edit</p>
          <p>Delete</p>
        </td>
      </tr>
    )
  }

  return (
    <table>
      <thead>
        <tr>                            
          <th data-sort="string">Apellidos y Nombres</th>
          <th>DNI</th>
          <th>Fecha Nac.</th>
          <th>Telefono</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        { users.map(user => renderUserRow(user)) }
      </tbody>
    </table>
  )
}

export default TableUsers
