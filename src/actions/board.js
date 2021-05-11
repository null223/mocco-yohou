import { SET_FOCUS } from '../constants/board'

export const setFocus = (focus) => ({
  type: SET_FOCUS,
  payload: focus
})