import C from '../../constants'

const SortMenu = ({ sort=C.SORTED_BY_DATE, onSelect=()=>null }) => {
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


module.exports = SortMenu;