import './styles.css'
import PropTypes from 'prop-types'

const SelectOption = ({
    selectOptionHandleOnChange, selectOptionItems, selectOptionValue
}) => {
    return(
        <div className="div-selectoption-root">
            <select className="selectoption-root" value={selectOptionValue} onChange={selectOptionHandleOnChange}>
                {selectOptionItems.map(function(element){
                    return (<option key={element} value={element}>{element}</option>);
                })}
            </select>
        </div>
    )
}

SelectOption.propTypes = {
    selectOptionHandleOnChange: PropTypes.func, 
    selectOptionItems: PropTypes.array, 
    selectOptionValue: PropTypes.string,
}

SelectOption.defaultProps = {
    selectOptionItems: [],
    selectOptionValue: '',
}

export default SelectOption