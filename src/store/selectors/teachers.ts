import { createSelector } from 'reselect'
import { AppState } from '../reducers/reducer'

const getTeachers = (state: AppState) => state.teachers.teachers;
const selectTeacher = (state: AppState) => state.teachers.selectTeacher;
const getError = (state: AppState) => state.groups.error;

export const getTeachersSelector = createSelector(getTeachers, (teachers) => teachers);
export const selectTeacherSelector = createSelector(selectTeacher, (teacher) => teacher);
export const getErrorSelector = createSelector(getError, (error) => error);