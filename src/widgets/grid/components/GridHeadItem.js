import React from 'react'

const GridHeadItem = ({
    val,
    styles,
    width,
    customStyles
}) => {
    return (
        <div style={{
            width: width || 150,
            'min-width': width || 150,
        }}  className={[styles.gridHeadItem, customStyles?.gridWrapper].join(' ')}>{val}</div>
    )
}
export default GridHeadItem