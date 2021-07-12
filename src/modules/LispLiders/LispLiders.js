import React from 'react'
// import {THEME} from '../../theme.js'
import {ContextLiders} from '../../context/Liders/ContextLiders'
import {NET} from '../../network.js'
import Button from '../../components/ui/Button'


// import styles from './Header.module.scss'


export const LispLiders = React.memo(() => {
	const {stateLiders, dispatchLiders} = React.useContext(ContextLiders)

	React.useEffect(() => {
		const fetchData = async () => {
			try {		
				const url = `${NET.APP_URL}/liders`

				const response = await fetch(url, {
					method: 'POST',
					cors: 'cors',
					headers: {
						'Content-Type': 'application/json'
				      // 'Content-Type': 'application/x-www-form-urlencoded',
				  },
				})
				const result = await response.json()
				dispatchLiders({
					type: "FETCH_LIDERS",
					payload: result
				})
			} catch (e) {
				console.log(e)
			}	
		}
	fetchData()
	}, [])

	const liders = stateLiders.liders

	const deleteLider = async (idLider) => {
		try {		
				const url = `${NET.APP_URL}/liders/${idLider}`

				let response = await fetch(url, {
					method: 'POST',
					cors: 'cors',
					headers: {
						'Content-Type': 'application/json'
					}
				})

				let result = await response.text()

				if (result === 'Good') {
					alert('Успешное удаление')
				} else if (result === "Error") {
					alert('Что-то пошло не так...')
				}
			} catch (e) {
				console.log(e)
			}
		
	}

	console.log(liders)
	return (
			<div style={{padding: '15px 0'}}>
				{liders.map((lider, index) => {
					return 	<div key={index} style={{display: 'flex'}}>
								<div style={{width: 200, borderBottom: '1px solid #000'}}>{lider.login}</div>
								<div style={{width: 100, borderBottom: '1px solid #000'}}>{lider.key}</div>
								<Button onClick={() => deleteLider(lider.id)}>Удалить</Button>
							</div>
				})}
			</div>
		)
})