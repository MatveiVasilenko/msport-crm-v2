import React, {
    useState
} from 'react'
import { NET } from './../../../../network';

const EditorCheck = ({
    classes,
    options,
    dataItem,
    attribute,
    setDataItem,
    title, 
    link,
    url,
    errors
}) => {
    console.log(errors)
    const [check, setCheck] = useState(dataItem[attribute] || false)
    const handleChange = () => {
        setCheck(!check)
        setDataItem({
            ...dataItem,
            [attribute]: !check
        })
    }
    const handlerLink = () => {
        window.open(`${NET.FRONT_URL}${url}`, '_blank')
    }
    return (
        <div style={{'margin-bottom': '16px'}}>
            <div style={{'margin-bottom': '0'}} className={classes.editor__checkWrapper}>
                <div 
                    className={check ? [classes.editor__check, classes.editor__check__active].join(' ') : classes.editor__check}
                    onClick={handleChange}
                    >                    
                </div>
                <div className={classes.editor__checkTitle}>
                    <div>{title ? title : ''}</div>
                    <div 
                        className={classes.editor__checkTitle__link}
                        onClick={handlerLink}
                        >{link ? link: ''}</div>
                </div>
            </div>
            <div className={classes.editor__error}>
                {errors && errors.length > 0 && errors.map((err, idx) => (
                    <div key={`err${attribute}${idx}`}>{err}</div>
                ))}
            </div>
        </div>
    )
}
export default EditorCheck