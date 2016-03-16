import C from '../constants'

const sortColors = sortedBy => dispatch => {
    switch (sortedBy) {
        case "rating" :
            return dispatch({type: C.SORT_COLORS, sortBy: C.SORTED_BY_RATING});
        case "title" :
            return dispatch({type: C.SORT_COLORS, sortBy: C.SORTED_BY_TITLE});
        default :
            return dispatch({type: C.SORT_COLORS, sortBy: C.SORTED_BY_DATE});
    }
};

module.exports = {sortColors};