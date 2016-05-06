import { PropTypes } from 'react'
import Color from './Color'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) => (
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map((color, i) => <Color key={i}
                                            onRate={(rating) => onRate(color.id, rating)}
                                            onRemove={() => onRemove(color.id)}
                {...color} />)}
    </div>
);

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};

module.exports = ColorList;