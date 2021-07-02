import axios from 'axios'
import
	{
		GET_SCHEDULE,
		GET_SCHEDULE_FAILURE,
	}
from '../types/schedule'

export const getSchedule = schedule => (
	{
		type: GET_SCHEDULE,
		payload: schedule
	}
)

export const getScheduleFailure = error => (
	{
			type: GET_SCHEDULE_FAILURE,
			payload: error
	}
)

export const getScheduleAsync = (group) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/${group}`)
            dispatch(getSchedule(data))
		}
		catch(error) {
			dispatch(getScheduleFailure(error))
		}
	}
}

