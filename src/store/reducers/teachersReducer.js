import
  {
    GET_TEACHERS_FAILURE,
    GET_TEACHERS_SUCCESS,
    SELECT_TEACHERS_FAILURE,
    SELECT_TEACHERS_SUCCESS
  }
from "../types/teachers"

const initState = {
  teachers: [],
  error: '',
  selectTeacher: null
}

export const teachersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TEACHERS_SUCCESS:
            return { ...state, teachers: action.payload}
        case GET_TEACHERS_FAILURE:
            return { ...state, error: action.payload}
        case SELECT_TEACHERS_SUCCESS:
            return { ...state, selectTeacher: action.payload}
        case SELECT_TEACHERS_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
