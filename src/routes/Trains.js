import React from 'react'
// import {NavLink} from 'react-router-dom'

import ReducerTrains from './../context/Trains/ReducerTrains'
import ReducerSportsmen from './../context/Sportsmens/ReducerSportsmen'
import ReducerLiders from './../context/Liders/ReducerLiders'

import {StateTrains} from './../context/Trains/StateTrains'
import {StateSportsmen} from './../context/Sportsmens/StateSportsmen'
import {StateLiders} from './../context/Liders/StateLiders'

import {ContextTrains} from './../context/Trains/ContextTrains'
import {ContextSportsmen} from './../context/Sportsmens/ContextSportsmen'
import {ContextLiders} from './../context/Liders/ContextLiders'

import Filter from './../modules/Filter/Filter'
import ResultTrains from './../modules/ResultTrains/ResultTrains'


export default React.memo(() => {
	const [state, dispatch] = React.useReducer(ReducerTrains, StateTrains)
	const [stateSport, dispatchSport] = React.useReducer(ReducerSportsmen, StateSportsmen)
	const [stateLiders, dispatchLiders] = React.useReducer(ReducerLiders, StateLiders)

	

	return (
			<ContextTrains.Provider value={{state, dispatch}}>
				<div>
					<ContextLiders.Provider value={{stateLiders, dispatchLiders}}>
						<Filter />
					</ContextLiders.Provider>
					<ContextSportsmen.Provider value={{stateSport, dispatchSport}}>
						<ResultTrains />
					</ContextSportsmen.Provider>
				</div>
			</ContextTrains.Provider>
		)
})