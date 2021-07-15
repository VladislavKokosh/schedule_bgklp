import { groupsReducer } from './groupsReducer';
import { combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { loaderReducer } from './loaderReducer'
import { scheduleReducer } from './scheduleReducer'
import { teachersReducer } from './teachersReducer'

const reducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  loader: loaderReducer,
  teachers: teachersReducer
})

export type AppState = ReturnType<typeof reducer>

export default reducer;
