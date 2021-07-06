import axios from 'axios'
import
	{
		GET_TEACHERS,
		GET_TEACHERS_FAILURE,
    SELECT_TEACHER
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

export const selectTeacher = teacher => (
  {
    type: SELECT_TEACHER,
    payload: teacher
  }
)

export const selectTeacherAsync = (teacher) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/teachers`)
      let searchTeacher = data.find(item => item.name === teacher)
      dispatch(selectTeacher(searchTeacher))
		}
		catch(error) {
			dispatch(getTeachersFailure(error))
		}
	}
}
