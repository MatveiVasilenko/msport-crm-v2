import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from './../../components/Select'
import Button from './../../components/ui/Button'
import {ContextTrains} from '../../context/Trains/ContextTrains'
import {ContextLiders} from '../../context/Liders/ContextLiders'

// import {NavLink} from 'react-router-dom'
import {BD} from '../../data'
import {NET} from '../../network'
import {createFormatDate} from './createFormatDate.js'

export default React.memo(() => {
	const {dispatch} = React.useContext(ContextTrains)
	const [active, setActive] = React.useState(true)
	const [beginVis, setBeginVis] = React.useState({
		status: false,
		value : 'Начало'
	})
	const [endVis, setEndVis] = React.useState({
		status: false,
		value : 'Конец'
	})
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

	const selectLider = async (e) => {
		let liderId = e.target.value
		if (Number(liderId) !== 0) {

			try {		
				const url = `${NET.APP_URL}/trains`

				const response = await fetch(url, {
					method: 'POST',
					cors: 'cors',
					headers: {
						'Content-Type': 'application/json'
						      // 'Content-Type': 'application/x-www-form-urlencoded',
						  },
					body: JSON.stringify({
						id: liderId
					})
						})
				const trains = await response.json()
				dispatch({
					type: "FIND_TRAINS",
					payload: trains
				})
				dispatch({
				type: "BEGIN_DATE",
				payload: ""
				})
				dispatch({
					type: "END_DATE",
					payload: ""
				})	
			} catch (e) {
				console.log(e)
			}	


			// const trains = BD.trains.filter(p => p.liders_id == liderId)
			
					
			setBeginVis({
				...beginVis,
				value: "Начало"
			})
			setEndVis({
				...endVis,
				value: "Конец"
			})
			setActive(false)			
		} else {
			setActive(true)
		}
	}

	const [date, setDate] = React.useState({
		date: new Date,
	})

	const onChangeBegin = (date) => {

		let dates = createFormatDate(date)
		
		setBeginVis({
			status: false,
			value: dates
		})
		dispatch({
			type: 'BEGIN_DATE',
			payload: dates
		})
		setDate(date)
	}

	const onChangeEnd = (date) => {

		let dates = createFormatDate(date)
		
		setEndVis({
			status: false,
			value: dates
		})
		dispatch({
			type: 'END_DATE',
			payload: dates
		})
		setDate(date)	
	}
	

	return (
		<div>				
			{/*Liders Select*/}
			<Select onChange={selectLider}>
				<option value={0}>Выбрать тренера</option>
				{stateLiders.liders.map((lider, index) => {
					return (
						<option 
							key={index}
							value={lider.id}
							>
								{lider.login}
						</option>
						)
				})}
			</Select>
			{/*Begin period*/}
			<Button 
				onClick={() => setBeginVis({...beginVis, status: !beginVis.status})} 
				disabled={active}
				>{beginVis.value}
			</Button>
				{beginVis.status ? 
				<div style={{position: 'absolute'}}>
					<Calendar
					onChange={onChangeBegin}
					value={date.date}

					/>
				</div>: ''
			}

			{/*End period*/}
			<Button 
				onClick={() => setEndVis({...endVis, status: !endVis.status})} 
				disabled={active}
				>{endVis.value}
			</Button>
			{endVis.status ? 
				<div style={{position: 'absolute'}}>
				<Calendar
				onChange={onChangeEnd}
				value={date.date}

				/>
				</div>: ''}



	</div>
	)
})