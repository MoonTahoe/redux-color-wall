import C from '../../constants'
import { ColorList } from '../ui'
import { connect } from 'react-redux'
import { removeColor, rateColor } from '../../actions/colors'
import { sortBy } from '../../lib/array-helpers'

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