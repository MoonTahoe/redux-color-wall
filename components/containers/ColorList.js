import { ColorList } from '../ui'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {colors: state.colors};
};

//
//  TODO: Map Dispatch to Props
//

module.exports = connect(mapStateToProps)(ColorList);