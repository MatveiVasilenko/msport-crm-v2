import React from 'react'
import {StateLiders} from './../context/Liders/StateLiders'
import {ContextLiders} from './../context/Liders/ContextLiders'
import ReducerLiders from './../context/Liders/ReducerLiders'

import {LispLiders} from '../modules/LispLiders/LispLiders'


export default React.memo(() => {
	const [stateLiders, dispatchLiders] = React.useReducer(ReducerLiders, StateLiders)

	
	return (
		<ContextLiders.Provider value={{stateLiders, dispatchLiders}}>
			<div>
				Лидеры спорта
			</div>
			<LispLiders />
		</ContextLiders.Provider>
		)
})