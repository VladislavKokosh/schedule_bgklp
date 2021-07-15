
import {
  GET_SCHEDULE,
  GET_SCHEDULE_FAILURE,
  GET_SCHEDULE_SUCCESS,
  GetScheduleSuccess,
  ScheduleFailurePayload,
  ScheduleSuccessPayload,
  GetScheduleFailure,
  GetScheduleRequest
} from './../types/schedule';

export const getScheduleAsyns = (
  group: string
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
