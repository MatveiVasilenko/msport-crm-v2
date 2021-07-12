import React from 'react'
import { faEdit, faQrcode, faTrash, faUndo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Buttons = ({
    idRow,
    value,
    gridHandlers,
    styles,
    setShowModal
}) => {
    const buttons = Object.keys(gridHandlers || {})
    
    return (
        <div className={styles.buttonWrapper}>
            {buttons.map((button) => (
                <div className={styles.buttonWrapperItem}>
                    <FontAwesomeIcon onClick={() => gridHandlers[button](idRow)} icon={
                        button === 'update' ?
                            faEdit : button === 'qr'?
                            faQrcode : button === 'delete' ?
                            faTrash : button === 'return' ?
                            faUndo : ''
                    } />
                </div>
            ))}
        </div>
    )
}
export default Buttons