import {
  SHOW_LOADER,
  HIDE_LOADER,
  LoaderActions,
  LoaderState
} from "../types/loader"

const initState:LoaderState = {
  isLoading: true
}

export const loaderReducer = (state = initState, action:LoaderActions) => {
  switch(action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true}
    case HIDE_LOADER:
      return { ...state, isLoading: false}
    default:
      return state
  }
}
