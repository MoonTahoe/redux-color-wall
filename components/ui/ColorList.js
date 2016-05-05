import Color from './Color'

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

module.exports = ColorList;