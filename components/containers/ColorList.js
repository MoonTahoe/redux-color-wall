import { Color } from '../ui'
import { connect } from 'react-redux'
import { removeColor, rateColor } from '../../actions/colors'

const ColorList = ({ colors=[], onRate=()=>null, onRemove=()=>null }) => (
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map((color, i) => <Color key={i}
                                            onRate={(rating) => onRate(color.id, rating)}
                                            onRemove={() => onRemove(color.id)}
                {...color} />)}
    </div>
);

const mapStateToProps = state => {
    return {colors: state.colors};
};

const mapDispatchToProps = dispatch => {
    return {
        onRemove: (id) => dispatch(removeColor(id)),
        onRate: (id, rating) => dispatch(rateColor(id, rating))
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ColorList);