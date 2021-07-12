import React from 'react'

const Image = ({
    dataItem,
    setDataItem,
    title,
    attribute
}) => {
    return (
        <div>
            <div>{title}</div>
                <input type="file" value={dataItem.img} onChange={(e) => {
                    // const file = e.target.files[0];
                    setDataItem({
                        ...dataItem,
                        [attribute]: e.target.files[0]
                    })
                }}/>
        </div>
    )
}
export default Image