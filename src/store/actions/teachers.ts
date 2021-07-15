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
  group: string
) : SelectTeacherRequest => (
	{
		type: SELECT_TEACHER,
    payload: group
	}
)

export const selectTeacherAsynsSuccess = (
  data:SelectTeacherSuccessPayload
) : SelectTeacherSuccess => (
	{
			type: SELECT_TEACHERS_SUCCESS,
			payload: data
	}
)

export const selectTeacherAsynsFailure = (
  error:TeachersFailurePayload
): SelectTeacherFailure => (
	{
			type: SELECT_TEACHERS_FAILURE,
			payload: error
	}
)
