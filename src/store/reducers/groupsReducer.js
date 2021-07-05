import
    {
        CLEAR_GROUP,
        GET_GROUP,
        GET_GROUP_FAILURE,
        SET_GROUP
    }
from "../types/groups"

const initState = {
    groups: [],
    group: null,
    error: ''
}

export const groupsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_GROUP:
            return { ...state, groups: action.payload}
        case GET_GROUP_FAILURE:
            return { ...state, error: action.payload}
        case SET_GROUP:
            return { ...state, group: action.payload}
        case CLEAR_GROUP:
            return { ...state, group: null}
        default: return state
    }
}
