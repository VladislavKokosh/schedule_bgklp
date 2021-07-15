
import { GetScheduleSuccess, ScheduleFailurePayload, ScheduleSuccessPayload, GetScheduleFailure, SchedulePayload } from './../types/schedule';
import
	{
    GetScheduleRequest,
		GET_SCHEDULE,
		GET_SCHEDULE_FAILURE,
    GET_SCHEDULE_SUCCESS,
	}
from '../types/schedule'

export const getScheduleAsyns = (
  group: SchedulePayload
) : GetScheduleRequest => (
	{
		type: GET_SCHEDULE,
    payload: group
	}
)

export const getScheduleAsynsSuccess = (
  data:ScheduleSuccessPayload
) : GetScheduleSuccess => (
	{
			type: GET_SCHEDULE_SUCCESS,
			payload: data
	}
)

export const getScheduleAsynsFailure = (
  error:ScheduleFailurePayload
): GetScheduleFailure => (
	{
			type: GET_SCHEDULE_FAILURE,
			payload: error
	}
)
