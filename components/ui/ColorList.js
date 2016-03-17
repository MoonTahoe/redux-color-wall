import React from 'react'
import Color from './Color'

//
//  TODO: Incorporate Styles
//

//
//  TODO: Pass onRate back up
//

//
//  TODO: Pass onRemove back up
//

const ColorList = ({ colors }) => <div className="color-list">
    {colors.map((color, i) => <Color key={i} {...color} />)}
</div>;

module.exports = ColorList;