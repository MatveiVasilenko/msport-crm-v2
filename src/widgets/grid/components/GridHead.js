import React from 'react'
import GridHeadItem from './GridHeadItem';

const GridHead = ({
    thead,
    styles,
    customStyles, 
    config
}) => {
    return (
        <div className={[styles.gridHead, customStyles?.gridHead].join(' ')}>
            {config.counter && <div style={{
                width: 30,
                'min-width': 30 
            }} className={[styles.gridHeadItem, customStyles?.gridHeadItem].join(' ')}>#</div>}
            {
                thead && thead.map((el, idx) => (
                    <GridHeadItem
                        val={el.title}
                        styles={styles}
                        key={`headItem${idx}`}
                        customStyles={customStyles}
                        width={el.width}
                    />
                ))
            }
        </div>
    )
}
export default GridHead