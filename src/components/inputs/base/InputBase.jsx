import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const InputBase = ({
  title,
  placeholder,
  value,
  handleOnChange
}) => {
  return (
    <input
      onChange={handleOnChange}
      value={value}
      className='input-base-root'
      title={title}
      placeholder={placeholder}  />
  )
}

InputBase.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
}

InputBase.defaultProps = {
  title: '',
  placeholder: '',
  value: '',
}

export default InputBase
