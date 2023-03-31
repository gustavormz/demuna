import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import './function.js'

const DropDownMenu = ({
  items,
  value,
  handleOnChange,
}) => {
  return(
    <div className="sel">
      <select value={value} onChange={handleOnChange} className="dropdownselect">
        {items.map(function(element){
          return (<option key={element} value={element}>{element}</option>);
        })}                
      </select>
    </div>  
  )
}

DropDownMenu.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
}

DropDownMenu.defaultProps = {
  items: [],
}

export default DropDownMenu
