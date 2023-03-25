import React from 'react'
import './styles.css'

const LayoutFullscreen = ({
  children
}) => {
  return (
    <div className='layout-fullscreen-root'>
      { children }
    </div>
  )
}

export default LayoutFullscreen
