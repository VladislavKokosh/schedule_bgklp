import
    {
        GET_CONTACTS,
        GET_CONTACTS_FAILURE
    }
from "../types/contatcs"

const initState = {
    contacts: []
}

export const contactsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_CONTACTS:
            return { ...state, contacts: action.payload}
        case GET_CONTACTS_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
