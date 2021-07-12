import
	{
		GET_TEACHERS,
		GET_TEACHERS_FAILURE,
    GET_TEACHERS_SUCCESS,
    SELECT_TEACHER,
    SELECT_TEACHERS_FAILURE,
    SELECT_TEACHERS_SUCCESS
	}
from '../types/teachers'

export const getTeachersAsync = () => (
	{
		type: GET_TEACHERS
	}
)

export const getTeachersAsynsSuccess = data => (
	{
    type: GET_TEACHERS_SUCCESS,
    payload: data
	}
)


export const getTeachersAsynsFailure = error => (
	{
    type: GET_TEACHERS_FAILURE,
    payload: error
	}
)

export const selectTeacherAsync = teacher => (
  {
    type: SELECT_TEACHER,
    payload: teacher
  }
)

export const selectTeacherAsyncSuccess = data => (
  {
    type: SELECT_TEACHERS_SUCCESS,
    payload: data
  }
)

export const selectTeacherAsyncFailure = error => (
  {
    type: SELECT_TEACHERS_FAILURE,
    payload: error
  }
)
