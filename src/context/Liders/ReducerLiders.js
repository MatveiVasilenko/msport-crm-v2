const ReducerLiders = (state, action) => {
	switch (action.type) {
		case "FETCH_LIDERS":
		state.liders = action.payload
		return {
			...state
		}

		default: 
		return state
	}
}
export default ReducerLiders;