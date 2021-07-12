import React from 'react'

const Text = ({
    value,
    width,
    styles,
    customStyles
}) => {
    return (
        <div style={{
            width: width,
            'min-width': width 
        }} className={[styles.gridRowItem, customStyles?.gridRowItem].join(' ')}>
            <div>{value}</div>
        </div>
    )
}
export default Text