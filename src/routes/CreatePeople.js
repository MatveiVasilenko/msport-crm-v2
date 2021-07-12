import React, {
    useState
} from 'react'
import Editor from './../widgets/editor/Editor';
import { getFields } from './../project/utils';
import { useHistory } from 'react-router';

const CreatePeople = ({
    classes
}) => {
    const history = useHistory()
    const fields = getFields()
    const [dataItem, setDataItem] = useState({
        children: true,
        sports_child: true,
        sports_count: true,
        type: 'sport',
        sport_id: 'Футбол',
        district: 'Центральный',
        politic: false,
        dataTrue: false
    })
    const afterSuccess = () => {
        history.push('/peoples')
    }
    console.log(dataItem)
    return (
        <div>
            <Editor 
                fields={fields.fields}
                dataItem={dataItem}
                setDataItem={setDataItem}
                route={'users'}
                afterSuccess={afterSuccess}
            />
        </div>
    )   
}
export default CreatePeople