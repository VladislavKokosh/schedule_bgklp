import
	{
		GET_TEACHERS,
		GET_TEACHERS_FAILURE,
    GET_TEACHERS_SUCCESS,
    SELECT_TEACHER,
    SELECT_TEACHERS_FAILURE,
    SELECT_TEACHERS_SUCCESS,
    GetTeachersRequest,
    TeachersSuccessPayload,
    GetTeachersSuccess,
    TeachersFailurePayload,
    GetTeachersFailure,
    SelectTeacherSuccess,
    ITeachers,
    SelectTeacherRequest,
    SelectTeacherSuccessPayload,
    SelectTeacherFailure
	}
from '../types/teachers'

export const getTeachersAsync = ():GetTeachersRequest => (
	{
		type: GET_TEACHERS
	}
)

export const getTeachersAsynsSuccess = (
  data: TeachersSuccessPayload
):GetTeachersSuccess => (
	{
    type: GET_TEACHERS_SUCCESS,
    payload: data
	}
)


export const getTeachersAsynsFailure = (
  error: TeachersFailurePayload
):GetTeachersFailure => (
	{
    type: GET_TEACHERS_FAILURE,
    payload: error
	}
)

export const selectTeacherAsync = (
  teacher: ITeachers
):SelectTeacherRequest => (
  {
    type: SELECT_TEACHER,
    payload: teacher
  }
)
