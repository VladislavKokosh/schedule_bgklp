import
	{
		GET_SCHEDULE,
		GET_SCHEDULE_FAILURE,
    GET_SCHEDULE_SUCCESS,
	}
from '../types/schedule'

export const getScheduleAsyns = group => (
	{
		type: GET_SCHEDULE,
    payload: group
	}
)

export const getScheduleAsynsSuccess = data => (
	{
			type: GET_SCHEDULE_SUCCESS,
			payload: data
	}
)

export const getScheduleAsynsFailure = error => (
	{
			type: GET_SCHEDULE_FAILURE,
			payload: error
	}
)
