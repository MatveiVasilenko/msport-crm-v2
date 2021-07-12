const ReducerSupport = (state, action) => {
	switch (action.type) {
		case "GET_QUIZ":
		console.log(state.quiz)
		state.quiz = []
		action.payload.map((elem) => {
			return state.quiz.push(elem)
		})
		return {...state}

		case "UPDATE_QUIZ":
		state.quiz[action.payload].status = 1
		return {...state}

		case "DELETE_QUIZ":
		state.quiz.splice(action.payload, 1)
		return {...state}

		case "CLEAR_QUIZ": 
		state.quiz = []

		return {...state}

		default: 
		return state
	}
}
export default ReducerSupport;