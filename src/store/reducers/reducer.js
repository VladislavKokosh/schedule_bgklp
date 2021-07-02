import { combineReducers } from 'redux'
import { groupsReducer } from './groupsReducer'
import { scheduleReducer } from './scheduleReducer'

export const reducer = combineReducers({
    groups: groupsReducer,
    schedule: scheduleReducer
})
