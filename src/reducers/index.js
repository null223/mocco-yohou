import { combineReducers } from 'redux'
import user from './user'
import board from './board'
import members from './members'

export default combineReducers({
  user,
  board,
  members
})