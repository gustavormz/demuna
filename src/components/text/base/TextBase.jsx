import './styles.css'
import PropTypes from 'prop-types'

const TextBase = ({
    texto
}) => {
    return(
        <div className="div-textbase-root">
            {texto}
        </div>
    )
}

TextBase.propTypes = {
    texto: PropTypes.string,
}

TextBase.defaultProps = {
    texto: '',
}

export default TextBase