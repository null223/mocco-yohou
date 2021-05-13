import { FETCH_MEMBERS } from '../constants/members'

const init = {
  members: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = init, action) => {
  switch (action.type) {
    case FETCH_MEMBERS:
      return Object.assign({}, state, {
        members: action.payload
      })
    default:
      return state
  }
}