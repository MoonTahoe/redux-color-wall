import C from '../../constants'
import { Color } from '../ui'
import { connect } from 'react-redux'
import { removeColor, rateColor } from '../../actions/colors'
import { sortBy } from '../../lib/array-helpers'

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
    let sortingColors = state.colors.map(c => c);

    switch (state.sort) {
        case C.SORTED_BY_TITLE :
            return {colors: sortingColors.sort(sortBy("string", "title"))};
        case C.SORTED_BY_RATING :
            return {colors: sortingColors.sort(sortBy("number", "rating"))};
        default :
            return {colors: sortingColors.sort(sortBy("date", "timestamp"))};
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRemove: (id) => dispatch(removeColor(id)),
        onRate: (id, rating) => dispatch(rateColor(id, rating))
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ColorList);