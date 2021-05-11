import { SET_FOCUS } from '../constants/board'

const init = {
  focus: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = init, action) => {
  switch (action.type) {
    case SET_FOCUS:
      return Object.assign({}, state, {
        focus: action.payload
      })
    default:
      return state
  }
}