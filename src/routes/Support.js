import React from 'react'
import {SupportMain} from '../modules/SupportMain/SupportMain'
import {ContextSupport} from '../context/Support/ContextSupport'
import {StateSupport} from '../context/Support/StateSupport'
import ReducerSupport from '../context/Support/ReducerSupport'

export default React.memo(() => {

	const [state, dispatch] = React.useReducer(ReducerSupport, StateSupport)	

	return (
			<ContextSupport.Provider value={{state, dispatch}}>
				<div>Вопросы</div>
				<SupportMain />				
			</ContextSupport.Provider>
		)
})