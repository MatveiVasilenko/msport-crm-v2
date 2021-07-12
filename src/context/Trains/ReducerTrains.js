const ReducerTrains = (state, action) => {
	switch (action.type) {
		case "FIND_TRAINS":
			state.trains = action.payload
		return state
		case "BEGIN_DATE":				
		return {
			...state,
			dateBegin: action.payload
		}	
		case "END_DATE":					
		return {
			...state,
			dateEnd: action.payload
		}			
		
		default: 
		return state
	}
}
export default ReducerTrains;