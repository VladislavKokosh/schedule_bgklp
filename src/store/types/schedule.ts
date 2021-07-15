export const GET_SCHEDULE = 'SCHEDULE/GET SCHEDULE';
export const GET_SCHEDULE_SUCCESS='SCHEDULE/GET SCHEDULE SUCCESS';
export const GET_SCHEDULE_FAILURE='SCHEDULE/GET SCHEDULE FAILURE';

export interface IDisciplines {
  time: string
  name: string
  teacher: string
  link: string
  cabinet: string
}

export interface ISchedule {
  day: string
  disciplines: IDisciplines[]
}

export interface ScheduleState {
  schedule: ISchedule[]
  error: string
}

export interface ScheduleSuccessPayload {
  schedule: ISchedule[]
}

export interface ScheduleFailurePayload {
  error: string
}

export type GetScheduleRequest = {
  type: typeof GET_SCHEDULE;
  payload: string;
}

export type GetScheduleSuccess = {
  type: typeof GET_SCHEDULE_SUCCESS;
  payload: ScheduleSuccessPayload;
};

export type GetScheduleFailure = {
  type: typeof GET_SCHEDULE_FAILURE;
  payload: ScheduleFailurePayload;
};

export type ScheduleActions =
| GetScheduleRequest
| GetScheduleSuccess
| GetScheduleFailure;
