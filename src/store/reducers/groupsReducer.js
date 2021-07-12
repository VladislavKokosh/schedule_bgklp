import
  {
    CLEAR_GROUP,
    GET_GROUP_FAILURE,
    GET_GROUP_SUCCESS,
    SET_GROUP_FAILURE,
    SET_GROUP_SUCCESS
  }
from "../types/groups"

const initState = {
  groups: [],
  group: null,
  error: ''
}

export const groupsReducer = (state = initState, action) => {
  switch(action.type){
    case GET_GROUP_SUCCESS:
      return { ...state, groups: action.payload}
    case GET_GROUP_FAILURE:
      return { ...state, error: action.payload}
    case SET_GROUP_SUCCESS:
      return { ...state, group: action.payload}
    case SET_GROUP_FAILURE:
      return { ...state, error: action.payload}
    case CLEAR_GROUP:
      return { ...state, group: null}
    default: return state
  }
}
