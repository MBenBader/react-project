const initial_states = {
    countries: [],
    regions: []
}
const countryReducer = (state = initial_states, action) => {
    switch (action.type) {
        case "SET_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        case "SET_REGIONS":
            return {
                ...state,
                regions: action.payload
            }
        default:
            return state
    }
}

export default countryReducer;