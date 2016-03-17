import React from 'react'
import { propTypes } from 'react'
import Star from './Star'

const StarRating = ({starsSelected=0, totalStars=5, onRate=()=>null}) => (
    <div className="star-rating">
        {Array.apply(null, Array(totalStars)).map((n, i) => <Star key={i}
                                                                  selected={i<starsSelected}
                                                                  onClick={() => onRate(i+1)}/>)}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
);

module.exports = StarRating;