import { PropTypes } from 'react'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'

const Color = ({ title, color, rating=0, timestamp="", onRemove=f=>f, onRate=f=>f}) => (
    <section className="color">
        <h1>{title}</h1>
        <div className="trash">
            <button onClick={onRemove}>
                <FaTrash />
            </button>
        </div>
        <div className="color" style={{ backgroundColor: color }}></div>
        <TimeAgo timestamp={timestamp}/>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>
);

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    timestamp: PropTypes.string,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

module.exports = Color;