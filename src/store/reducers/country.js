const initial_states = {
    countries: []
}
const countryReducer = (state = initial_states, action) => {
    switch (action.type) {
        case "SET_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state
    }
}

export default countryReducer;