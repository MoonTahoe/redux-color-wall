import React from 'react'
const Star = ({ selected=false, onClick=()=>null }) => (
    <div className={(selected) ? "star selected" : "star"}
         onClick={onClick}></div>
);

module.exports = Star;