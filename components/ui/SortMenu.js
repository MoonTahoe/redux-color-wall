import C from '../../constants'
import { PropTypes } from 'react'

const SortMenu = ({ sort=C.SORTED_BY_DATE, onSelect=f=>f }) => {
    return (
        <nav>
            <h1>Sort Colors</h1>

            <a href="#"
               className={(sort === C.SORTED_BY_DATE) ? "selected" : null}
               onClick={e => {
                   e.preventDefault();
                   onSelect(C.SORTED_BY_DATE)
               }}>date</a>

            <a href="#"
               className={(sort === C.SORTED_BY_TITLE) ? "selected" : null}
               onClick={e => {
                   e.preventDefault();
                   onSelect(C.SORTED_BY_TITLE)
               }}>title</a>

            <a href="#"
               className={(sort === C.SORTED_BY_RATING) ? "selected" : null}
               onClick={e => {
                   e.preventDefault();
                   onSelect(C.SORTED_BY_RATING)
               }}>rating</a>

        </nav>
    )
};

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
};

module.exports = SortMenu;