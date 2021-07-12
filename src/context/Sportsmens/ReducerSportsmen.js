const ReducerSportsmen = (state, action) => {
	switch (action.type) {
		case "FETCH_SPORTSMENS":
		state.sportsmens = action.payload
		return {
			...state
		}

		default: 
		return state
	}
}
export default ReducerSportsmen;