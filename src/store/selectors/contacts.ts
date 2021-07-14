import { createSelector } from 'reselect'
import { AppState } from '../reducers/reducer'

const getContacts = (state: AppState) => state.contacts.contacts;
const getError = (state: AppState) => state.contacts.error;

export const getContactsSelector = createSelector(getContacts, (contacts) => contacts);
export const getErrorSelector = createSelector(getError, (error) => error);