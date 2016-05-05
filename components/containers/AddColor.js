import { connect } from 'react-redux'
import { addColor } from '../../actions/colors'
import { AddColorForm } from '../ui'

const mapDispatchToProps = dispatch => {
    return {
        onAddColor: (color, title) => dispatch(addColor(color, title))
    }
};

module.exports = connect(null, mapDispatchToProps)(AddColorForm);