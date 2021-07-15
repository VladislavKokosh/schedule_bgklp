export const SHOW_LOADER = 'LOADER/SHOW LOADER'
export const HIDE_LOADER = 'LOADER/HIDE LOADER'

export interface LoaderState {
  isLoading: boolean
}

export type ShowLoader = {
    type: typeof SHOW_LOADER;
  }

export type HideLoader = {
  type: typeof HIDE_LOADER;
}

export type LoaderActions =
| ShowLoader
| HideLoader