import React from 'react'
import StarRating from './StarRating'

//
//  TODO: Incorporate Delete Button
//

//
//  TODO: Incorporate Styles
//

//
//  TODO: Incorporate Star Button
//

//
//  TODO: Pass Delete Back up Tree
//

//
//  TODO: Pass Rate Back up Tree
//

const Color = ({ title, color, rating}) => <section className="color">
    <h1>{title}</h1>
    <div style={{ backgroundColor: color }}></div>
</section>;

module.exports = Color;