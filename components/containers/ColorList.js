import { ColorList } from '../ui'
import { connect } from 'react-redux'
import { removeColor, rateColor } from '../../actions/colors'

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