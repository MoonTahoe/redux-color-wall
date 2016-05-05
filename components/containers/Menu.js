import C from '../../constants'
import { connect } from 'react-redux'
import { sortColors } from '../../actions/sort'
import { SortMenu } from '../ui'

const mapStateToProps = state => {
    return {sort: state.sort};
};

const mapDispatchToProps = dispatch => {
    return {
        onSelect: (sortBy) => dispatch(sortColors(sortBy))
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SortMenu);