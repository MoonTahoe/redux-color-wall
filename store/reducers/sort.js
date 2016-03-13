import C from '../../constants'

const sort = (state=C.SORTED_BY_DATE, action={type:null}) => {
    switch(action.type) {
        case C.SORT_COLORS:
            return action.sortBy;
        default :
            return state;
    }
};

module.exports = sort;