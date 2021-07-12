import
    {
        GET_SCHEDULE_FAILURE,
        GET_SCHEDULE_SUCCESS
    }
from "../types/schedule"

const initState = {
    schedule: [],
    error: ''
}

export const scheduleReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SCHEDULE_SUCCESS:
            return { ...state, schedule: action.payload}
        case GET_SCHEDULE_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
