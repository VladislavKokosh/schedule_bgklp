import
  {
    CLEAR_GROUP,
    GET_GROUP_FAILURE,
    GET_GROUP_SUCCESS,
    SET_GROUP,
    GroupsState,
    GroupsActions
  }
from "../types/groups"

const initState: GroupsState = {
  groups: [],
  group: '',
  error: ''
}

export const groupsReducer = (state = initState, action: GroupsActions) => {
  switch(action.type){
    case GET_GROUP_SUCCESS:
      return { ...state, groups: action.payload.groups}
    case GET_GROUP_FAILURE:
      return { ...state, error: action.payload.error}
    case SET_GROUP:
      return { ...state, group: action.payload}
    case CLEAR_GROUP:
      return { ...state, group: ''}
    default: return state
  }
}
