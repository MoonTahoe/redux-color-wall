import C from '../constants'

const sortColors = (sortBy=C.SORTED_BY_DATE) => dispatch => {
    dispatch({type: C.SORT_COLORS, sortBy });
};

module.exports = {sortColors};