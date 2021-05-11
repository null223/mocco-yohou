import { LOGIN_USER, LOGOUT_USER } from '../constants/user'

const init = {
  user: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = init, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        user: action.payload
      })
    case LOGOUT_USER:
      return Object.assign({}, state, {
        user: null
      })
    default:
      return state
  }
}