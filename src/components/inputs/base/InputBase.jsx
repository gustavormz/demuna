import './styles.css'
import PropTypes from 'prop-types'

const InputBase = ({
    searchInputHandleOnChange,
    searchInputValue,
    searchInputPlaceHolder
}) => {
    return(
        <input className='inputbase-root' onChange={searchInputHandleOnChange} value={searchInputValue} placeholder={searchInputPlaceHolder}/>
    )
}

InputBase.propTypes = {
    searchInputHandleOnChange: PropTypes.func,
    searchInputValue: PropTypes.string,
    searchInputPlaceHolder: PropTypes.string,
}

InputBase.defaultProps = {
    searchInputValue: '',
    searchInputPlaceHolder: '',
}

export default InputBase