import React from 'react'
import './styles.css'

const InputBase = ({
  title = '',
  placeholder = ''
}) => {
  return (
    <input className='input-base-root' title={title} placeholder={placeholder}  />
  )
}

export default InputBase
