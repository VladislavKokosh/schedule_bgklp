import { TeachersActions } from './../types/teachers';
import
  {
    GET_TEACHERS_FAILURE,
    GET_TEACHERS_SUCCESS,
    SELECT_TEACHERS_FAILURE,
    SELECT_TEACHERS_SUCCESS,
    TeachersState
  }
from "../types/teachers"

const initState:TeachersState = {
  teachers: [],
  error: '',
  selectTeacher: {id: '', img: '',name: '' ,about: ''}
}

export const teachersReducer = (state = initState, action: TeachersActions) => {
    switch(action.type){
        case GET_TEACHERS_SUCCESS:
            return { ...state, teachers: action.payload.teachers}
        case GET_TEACHERS_FAILURE:
            return { ...state, error: action.payload.error}
        case SELECT_TEACHERS_SUCCESS:
            return { ...state, selectTeacher: action.payload}
        case SELECT_TEACHERS_FAILURE:
          return { ...state, error: action.payload.error}
        default: return state
    }
}
