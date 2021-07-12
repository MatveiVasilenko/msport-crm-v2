import React from 'react'
import {NET} from '../../network'
import Button from '../../components/ui/Button'

import {ContextSupport} from '../../context/Support/ContextSupport'

export const SupportMain = React.memo(() => {

	const {state, dispatch} = React.useContext(ContextSupport)
	React.useEffect(() => {
		const fetchQuiz = async () => {
			const url = `${NET.APP_URL}/support`

			try {
				let response = await fetch(url, {
					method: 'POST'
				})

				let result = await response.json()
				dispatch({
					type: 'GET_QUIZ',
					payload: result
				})
			} catch (err) {
				console.log(err)
			}
		}
		fetchQuiz()
	}, [dispatch])

	const readyQuiz = async (idQuiz, index) => {
		const url = `${NET.APP_URL}/support/${idQuiz}`
		try {
			let response = await fetch(url, {
				method: 'POST'
			})

			let result = await response.text()
			dispatch({
				type: "UPDATE_QUIZ",
				payload: index
			})

		} catch (err) {
			console.log(err)
		}
	}

	const deleteQuiz = async (idQuiz, index) => {
		const url = `${NET.APP_URL}/support/${idQuiz}`
		try {
			let response = await fetch(url, {
				method: 'DELETE'
			})

			let result = await response.text()
			dispatch({
				type: "DELETE_QUIZ",
				payload: index
			})

		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			{state.quiz.map((qui, index) => {
				return <div key={index} style={{display: 'flex', paddingBottom: '15px', borderBottom: '1px solid #000'}}>
					<div style={{width: '60%'}}>
						<div style={{fontWeight: 700}}>{qui.name}</div>
						<div style={{fontStyle: 'italic', paddingBottom: '15px'}}>{qui.email}</div>
						<div>{qui.message}</div>
					</div>
					<div style={{width: '15%', color: qui.status ? 'green' : 'red'}}>{qui.status ? 'Выполнена' : 'В работе'}</div>
					<div>
						<Button onClick={() => readyQuiz(qui.id, index)} disabled={qui.status ? true : false}>Обработано</Button>
						<Button onClick={() => deleteQuiz(qui.id, index)} style={{backgroundColor: ''}}>Удалить</Button>
					</div>
				</div>
			})}
		</div>
		)
})