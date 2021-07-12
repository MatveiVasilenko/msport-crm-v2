import React from 'react'

const GridFilter = ({
    type,
    filterParams,
    filter,
    setFilter,
    setFilterType,
    classes
}) => {
    return (
        <select className={classes.gridFilter} value={filter} onChange={(e) => {
            setFilter(e.target.value)
            setFilterType(type)
        }}>
            {filterParams && filterParams.map((el, idx) => (
                <option value={el.value} key={`opti${idx}`}>{el.title}</option>
            ))}
        </select>
    )
}
export default GridFilter