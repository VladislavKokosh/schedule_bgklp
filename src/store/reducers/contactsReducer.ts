import
  {
    GET_CONTACTS_FAILURE,
    GET_CONTACTS_SUCCESS
  }
from "../types/contacts"

import { ContactsActions, ContactsState } from "../types/contacts"

const initState: ContactsState = {
  contacts: [],
  error: ''
}

export const contactsReducer = (state = initState, action: ContactsActions) => {
  switch(action.type){
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload.contacts}
    case GET_CONTACTS_FAILURE:
      return { ...state, error: action.payload.error}
    default: return state
  }
}
