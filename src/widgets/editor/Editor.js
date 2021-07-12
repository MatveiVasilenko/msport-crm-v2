import React, {
    useState
} from 'react' 

import classes from './editor.module.scss';

import EditorSwitcher from './EditorSwitcher'
import { NET } from './../../network';

const Editor = ({
    route,
    fields,
    dataItem,
    setDataItem,
    afterSuccess
}) => {
    // Data for new news
    const [errorData, setDataError] = useState({})
    console.log(dataItem)
    const create = async () => {
        // setPreload(1)
        
            try {
                //Блок формирования отправки данных картинки и текста
                let formData = new FormData();
                //Перебор объекта отправки - добавление ключей и значений
                for (let key in dataItem) {
                    formData.append(key, dataItem[key])
                }
                const url = `${NET.APP_URL}/${route}`
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        //Заголовки не отправляем вообще никакие)
                        // 'Accept': 'application/json',
                        // 'Content-Type': 'multipart/form-data',
                        // 'Content-Type': false,
                        // "processData": false
                    },
                    body: formData
                })
                if (response.status === 200) {
                    const result = await response.text()
                    afterSuccess()
                } else if (response.status === 401 || response.status === 422) {
                    const errors = await response.json()
                    setDataError(errors)
                }
                
               
            } catch (e) {
                console.log(e)
            }
    }

    const update = async () => {
        // setPreload(1)
        // if (dataItem.title.length < 3) {
        //     alert("Small")
        // } else {
            try {
                //Блок формирования отправки данных картинки и текста
                let formData = new FormData();
                //Перебор объекта отправки - добавление ключей и значений
                for (let key in dataItem) {
                    formData.append(key, dataItem[key])
                }
                const url = `${NET.APP_URL}/${route}/${dataItem.id}`
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        //Заголовки не отправляем вообще никакие)
                        // 'Accept': 'application/json',
                        // 'Content-Type': 'multipart/form-data',
                        // 'Content-Type': false,
                        // "processData": false
                    },
                    body: formData
                })
                const result = await response.text()
                // fetchData(dispatchData)
                console.log(result)
                // dispatchMain({
                //     type: "FETCH_DATA",
                //     payload: result
                // })
                
            } catch (e) {
                console.log(e)
            }
        // }
    }

    
    return (
        <div style={{padding: 20}}>
            {
                fields.map((itemEditor, idx) => (
                    <EditorSwitcher 
                        key={`item${idx}`}
                        itemEditor={itemEditor}
                        classes={classes}
                        dataItem={dataItem}
                        setDataItem={setDataItem}
                        errorData={errorData}
                    />
                ))
            }

            {/* <div className={classes.editor__item}>
                <div className={classes.editor__item__title}>
                    Краткое описание
                </div>
                <div className={classes.editor__item__input}>
                    <textarea rows="3" value={dataItem.subtitle} type="text" onChange={(e) => {
                        setDataItem({
                            ...dataItem,
                            subtitle: e.target.value
                        })
                    }} />
                </div>
            </div> */}

            

        <button className={classes.editor__button} onClick={create}>Створити</button>
            {/* {btn ? <Button onClick={create}>Создать</Button> : <Button onClick={update}>Обновить</Button>} */}
            {/* <Edit /> */}
        </div>
    )
}
export default Editor