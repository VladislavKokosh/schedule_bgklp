import { combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { groupsReducer } from './groupsReducer'
import { loaderReducer } from './loaderReducer'
import { scheduleReducer } from './scheduleReducer'
import { teachersReducer } from './teachersReducer'

const reducer = combineReducers({
  contacts: contactsReducer
})

export type AppState = ReturnType<typeof reducer>

export default reducer;
