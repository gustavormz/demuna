import './styles.css'
import PropTypes from 'prop-types'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const ButtonNewUser = ({
    texto
}) => {
    return(
        <IconButton className="IconButton">
            <PlaylistAddIcon className="Icon" sx={{color: "#4CAF50"}}/>
        </IconButton>
    )
}

ButtonNewUser.propTypes = {
    texto: PropTypes.string,
}

ButtonNewUser.defaultProps = {
    texto: 'Hola',
}

export default ButtonNewUser