import axios from 'axios'
import
	{
		GET_SCHEDULE,
		GET_SCHEDULE_FAILURE,
	}
from '../types/schedule'
import { showLoader, hideLoader } from '../../store/actions/loader'

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
            dispatch(showLoader())
			const { data } = await axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/${group}`)
            dispatch(getSchedule(data))
            dispatch(hideLoader())
		}
		catch(error) {
			dispatch(getScheduleFailure(error))
		}
	}
}

