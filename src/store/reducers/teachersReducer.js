import
    {
        GET_TEACHERS,
        GET_TEACHERS_FAILURE
    }
from "../types/teachers"

const initState = {
    teachers: [],
    error: ''
}

export const teachersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TEACHERS:
            return { ...state, teachers: action.payload}
        case GET_TEACHERS_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}