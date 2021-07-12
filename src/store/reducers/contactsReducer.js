import
  {
    GET_CONTACTS_FAILURE,
    GET_CONTACTS_SUCCESS
  }
from "../types/contatcs"

const initState = {
  contacts: []
}

export const contactsReducer = (state = initState, action) => {
  switch(action.type){
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload}
    case GET_CONTACTS_FAILURE:
      return { ...state, error: action.payload}
    default: return state
  }
}
