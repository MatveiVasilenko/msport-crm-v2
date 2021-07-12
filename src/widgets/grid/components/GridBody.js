import React from 'react'
import GridRow from './GridRow';

const GridBody = ({
    tbody,
    elems,
    styles,
    customStyles,
    gridHandlers,
    config
}) => {
    return (
        <div className={[styles.gridBody, customStyles?.gridWrapper].join(' ')}>
            {tbody.map((elem, idx) => (
                <GridRow
                    styles={styles}
                    elems={elems} 
                    elem={elem}
                    key={`trow${idx}`}
                    config={config}
                    numberRow={idx}
                    gridHandlers={gridHandlers}
                />
            ))}
        </div>
    )
}
export default GridBody