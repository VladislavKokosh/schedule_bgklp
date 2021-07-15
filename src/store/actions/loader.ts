import {
  SHOW_LOADER,
  HIDE_LOADER,
  ShowLoader,
  HideLoader
} from "../types/loader";

export const showLoader = ():ShowLoader => ({
    type: SHOW_LOADER
})

export const hideLoader = ():HideLoader => ({
    type: HIDE_LOADER
})
