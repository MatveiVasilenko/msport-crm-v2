import React from 'react'
import {ContextTrains} from '../../context/Trains/ContextTrains'
import {ContextSportsmen} from '../../context/Sportsmens/ContextSportsmen'
import {NET} from '../../network.js'
import {THEME} from '../../theme.js'
import styles from './ResultTrains.module.scss'

export default React.memo(() => {
	const {state} = React.useContext(ContextTrains)
	const {stateSport, dispatchSport} = React.useContext(ContextSportsmen)
	let trains = []
	let dates = []
	if (state.dateBegin !== "" && state.dateEnd !== "") {

		let beginYear = Number(state.dateBegin.substring(0,4))
		let endYear = Number(state.dateEnd.substring(0,4))
		let beginMounth = Number(state.dateBegin.substring(5,7))
		let endMounth = Number(state.dateEnd.substring(5,7))
		let beginDay = Number(state.dateBegin.substring(8,10))
		let endDay = Number(state.dateEnd.substring(8,10))

		trains = state.trains.filter(t => {
			let year = Number(t.date.substring(0,4))
			let mounth = Number(t.date.substring(5,7))
			let day = Number(t.date.substring(8,10))

			if ( year >= beginYear && year <= endYear) {
				if (mounth == beginMounth && mounth == endMounth) {
					if (day >= beginDay && day <= endDay) {
						return t
					}
				} else if (beginMounth < endMounth && mounth == beginMounth) {
					if (day >= beginDay && day <= 31) {
						return t
					}
				} else if (beginMounth < endMounth && mounth == endMounth) {
					if (day >= 1 && day <= endDay) {
						return t
					}
				} else if (endMounth - beginMounth > 1 && mounth >= beginMounth && mounth <= endMounth) {
					return t
				}
			}
		})
		//Получение диапазона дат
		if (beginMounth == endMounth) {
			for (let i = endDay; i >= beginDay; i--) {
				let day = i 
				if ((String(day).length) == 1) {
					day = '0'+ day
				}
				dates.push(`${state.dateBegin.substring(5,7)}-${day}`)
			}
		} else if ((endMounth - beginMounth) == 1) {
			let endDayMounth = 30
			if (beginMounth == '01' || beginMounth == '03' || beginMounth == '05' || beginMounth == '07' || beginMounth == '08' || beginMounth == '10' || beginMounth == '12') {
				endDayMounth = 31
			} else if (beginMounth == '02') {
				endDayMounth = 29
			}
			for (let i = endDay; i >= 1; i--) {
				let day = i 
				if ((String(day).length) == 1) {
					day = '0'+ day
				}
				dates.push(`${state.dateEnd.substring(5,7)}-${day}`)
			}
			for (let i = endDayMounth; i >= beginDay; i--) {
				let day = i 
				if ((String(day).length) == 1) {
					day = '0'+ day
				}
				dates.push(`${state.dateBegin.substring(5,7)}-${day}`)
			}
		}
	}
	//Получение спортсменов из БД
	React.useEffect(() => {
		const fetchData = async () => {
			try {		
				const url = `${NET.APP_URL}/sportsmen`

				const response = await fetch(url, {
					method: 'POST',
					cors: 'cors',
					headers: {
						'Content-Type': 'application/json'
				      // 'Content-Type': 'application/x-www-form-urlencoded',
				  },
				})
				const result = await response.json()
				dispatchSport({
					type: "FETCH_SPORTSMENS",
					payload: result
				})
			} catch (e) {
				console.log(e)
			}	
		}
	fetchData()
	}, [])
	
	// Генерация посещения спортсменов
	const indexSportsmens = []

	trains.map((train, index) => (
		JSON.parse(train.sportsmens).map((idSport) => indexSportsmens.push({
			id: idSport,
			date: train.date
		}))
	))

	const allSportsmens = indexSportsmens.reduce((acc, el) => {
		let flag = false
		for (let key in acc) {
			if (key == el.id) {
				flag = true
			}
		}
		if (flag) {
			acc[el.id] = [...acc[el.id], el.date]
		} else {
			acc[el.id] = [el.date]
		}
	    return acc;
	}, {})

	const resultSportsmen = []


	for (let key in allSportsmens) {
		stateSport.sportsmens.find((elem) => {
			if (elem.id == key) {
				resultSportsmen.push({
					name: elem.login,
					count: allSportsmens[key]
				})
			}
		})
	}

	return ( 
			<div className={styles.body}>
				<div style={{display: 'flex'}}>
					<div style={{width: '15%', height: 30}}></div>
					<div style={{width: '75%', height: 30, display: 'flex'}}>
						{dates.reverse().map((dateItem, index) => {
							return <div key={index} className={styles.date__item}>{dateItem}</div>
						})}
					</div>
					<div style={{width: '5%', textAlign: 'center', background: 'rgba(0,0,0,0.1)' }}>Итого</div>
				</div>
			{resultSportsmen.map((sportsmen, index) => {
				return <div 
							key={index}
							style={{display: 'flex'}}>
					<div className={styles.sportsmen}>
						{sportsmen.name}
					</div>
					<div style={{	width: '75%',
									display: 'flex'
									}}>
						{dates.map((oneDate, index) => {
							let flagTrue = false
							sportsmen.count.map((countDate, index) => {
								if (countDate.substring(5) == oneDate) {
									flagTrue = true
									console.log(countDate.substring(5), oneDate)
								}
							})
							if (flagTrue) {
								return <div key={index} className={styles.box} style={{
									background: `${THEME.MAIN_COLOR}`,
								}}></div>
							} else {
								return <div key={index} className={styles.box}></div>
							}
						})}
					</div>
					<div style={{
							width: '5%', 
							textAlign: 'center', 
							fontWeight: 'bold', 
							fontSize: 16,
							height: 30,
							lineHeight: 2,
							border: '0.5px solid black'
						}}>
						{sportsmen.count.length}
					</div>
				</div>
			})}
			</div>
		)
})