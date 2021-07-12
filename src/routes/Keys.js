import React from 'react'
import {NET} from '../network'
import Button from '../components/ui/Button'
import Input from '../components/Input'

export default React.memo(() => {

	const [keys, setKeys] = React.useState([])
	const [value, setValue] = React.useState('')

	React.useEffect(() => {
		const fetchKey = async () => {
			const url = `${NET.APP_URL}/keys`

			try {
				let response = await fetch(url, {
					method: 'POST'
				})

				let result = await response.json()
				setKeys(result)
			} catch (err) {
				console.log(err)
			}
		}
		fetchKey()
	}, [])

	const addKey = async () => {
		if (value.length !== 8) {
			alert('Ключ должен состоять из 8 символов')
		} else {
			try {
				const url = `${NET.APP_URL}/keysAdd`

				let response = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
				  	},
					body: JSON.stringify({
						value: value
					})
				})

				let result = await response.text()
				console.log(result)
				if(result === 'Good') {
					alert('Ключ добавлен')
				} else if (result === 'Error') {
					alert('Что-то пошло не так...')					
				} else if (result === 'NotYet') {
					alert('Такой ключ уже зарегистрирован')
				}
			} catch (err) {
				console.log(err)
			}
		}
	}
	console.log(keys)
	return (
			<div>
				<div style={{display: 'flex'}}>
					<div style={{width: 100}}>Ключ</div>
					<div style={{width: 100}}>Статус</div>
				</div>
				{keys.map((key, index) => {
					return <div key={index} style={{display: 'flex'}}>
						<div style={{width: 100}}>{key.value}</div>
						<div style={{width: 100, color: key.status ? 'red' : 'green'}}>{key.status ? "Занят" : "Свободен"}</div>
					</div>
				})}
				<div style={{display: 'flex'}}>
					<Input value={value} onChange={(e) => {
						setValue(e.target.value)
					}} />
					<Button style={{width: 200}} onClick={addKey}>Добавить ключ</Button>
				</div>
				
			</div>
		)
})