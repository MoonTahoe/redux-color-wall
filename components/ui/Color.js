import React from 'react'
import StarRating from './StarRating'
import FaTrash from 'react-icons/lib/fa/trash-o'

const Color = ({ title, color, rating, onRemove=()=>null, onRate=()=>null}) => (
    <section className="color">
        <h1>{title}</h1>
        <div className="trash">
            <button onClick={onRemove}>
                <FaTrash />
            </button>
        </div>
        <div className="color" style={{ backgroundColor: color }}></div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>
);

module.exports = Color;