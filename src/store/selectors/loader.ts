import { createSelector } from 'reselect'
import { AppState } from '../reducers/reducer'

const getLoader = (state: AppState) => state.loader.isLoading;

export const getLoaderSelector = createSelector(getLoader, (isLoading) => isLoading);
