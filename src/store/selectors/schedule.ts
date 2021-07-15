import { createSelector } from 'reselect'
import { AppState } from '../reducers/reducer'

const getSchedule = (state: AppState) => state.schedule.schedule;
const getError = (state: AppState) => state.contacts.error;

export const getScheduleSelector = createSelector(getSchedule, (schedule) => schedule);
export const getErrorSelector = createSelector(getError, (error) => error);