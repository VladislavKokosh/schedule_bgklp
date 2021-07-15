import { ScheduleActions, ScheduleState } from './../types/schedule';
import
  {
    GET_SCHEDULE_FAILURE,
    GET_SCHEDULE_SUCCESS
  }
from "../types/schedule"

const initState: ScheduleState = {
  schedule: [],
  error: ''
}

export const scheduleReducer = (state = initState, action:ScheduleActions) => {
  switch(action.type){
    case GET_SCHEDULE_SUCCESS:
      return { ...state, schedule: action.payload.schedule}
    case GET_SCHEDULE_FAILURE:
      return { ...state, error: action.payload.error}
    default: return state
  }
}
