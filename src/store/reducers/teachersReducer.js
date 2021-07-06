import
    {
        GET_TEACHERS,
        GET_TEACHERS_FAILURE,
        SELECT_TEACHER
    }
from "../types/teachers"

const initState = {
    teachers: [],
    error: '',
    selectTeacher: null
}

export const teachersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TEACHERS:
            return { ...state, teachers: action.payload}
        case GET_TEACHERS_FAILURE:
            return { ...state, error: action.payload}
        case SELECT_TEACHER:
            return { ...state, selectTeacher: action.payload}
        default: return state
    }
}
