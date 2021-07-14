import { createSelector } from 'reselect'
import { AppState } from '../reducers/reducer'

const getGroups = (state: AppState) => state.groups.groups;
const getError = (state: AppState) => state.groups.error;

export const getGroupsSelector = createSelector(getGroups, (groups) => groups);
export const getErrorSelector = createSelector(getError, (error) => error);
