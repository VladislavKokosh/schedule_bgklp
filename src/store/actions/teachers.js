import axios from 'axios'
import
	{
		GET_TEACHERS,
		GET_TEACHERS_FAILURE
	}
from '../types/teachers'
import { showLoader, hideLoader } from '../../store/actions/loader'

export const getTeachers = teachers => (
	{
		type: GET_TEACHERS,
		payload: teachers
	}
)

export const getTeachersFailure = error => (
	{
			type: GET_TEACHERS_FAILURE,
			payload: error
	}
)

export const getTeachersAsync = () => {
	return async (dispatch) => {
		try {
			dispatch(showLoader())
			const { data } = await axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/teachers`)
            dispatch(getTeachers(data))
            dispatch(hideLoader())
		}
		catch(error) {
			dispatch(getTeachersFailure(error))
		}
	}
}
