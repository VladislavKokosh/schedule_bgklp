import { combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { groupsReducer } from './groupsReducer'
import { loaderReducer } from './loaderReducer'
import { scheduleReducer } from './scheduleReducer'
import { teachersReducer } from './teachersReducer'

export const reducer = combineReducers({
    groups: groupsReducer,
    schedule: scheduleReducer,
    loading: loaderReducer,
    teachers: teachersReducer,
    contacts: contactsReducer
})
