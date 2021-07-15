import { createSelector } from 'reselect'
import { AppState } from '../reducers/reducer'

const getGroups = (state: AppState) => state.groups.groups;
const getGroup = (state: AppState) => state.groups.group;
const getError = (state: AppState) => state.groups.error;

export const getGroupsSelector = createSelector(getGroups, (groups) => groups);
export const getGroupSelector = createSelector(getGroup, (group) => group);
export const getErrorSelector = createSelector(getError, (error) => error);
