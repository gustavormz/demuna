import React from 'react'
import './styles.css'
import './function.js'

const DropDownMenu = ({
    items=[]
}) => {
    return(
        <div className="sel">
            <select className="dropdownselect">
                {items.map(function(element){
                    return (<option value={element}>{element}</option>);
                })}                
            </select>
        </div>
        
    )
}

export default DropDownMenu
{/* return '<option value='+element+'>'+element+'</option>'; */}