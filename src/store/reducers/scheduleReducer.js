import
    {
        GET_SCHEDULE,
        GET_SCHEDULE_FAILURE
    }
from "../types/schedule"

const initState = {
    schedule: [],
    error: ''
}

export const scheduleReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SCHEDULE:
            return { ...state, schedule: action.payload}
        case GET_SCHEDULE_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
