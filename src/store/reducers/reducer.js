import { combineReducers } from 'redux'
import { groupsReducer } from './groupsReducer'
import { loaderReducer } from './loaderReducer'
import { scheduleReducer } from './scheduleReducer'

export const reducer = combineReducers({
    groups: groupsReducer,
    schedule: scheduleReducer,
    loading: loaderReducer
})
