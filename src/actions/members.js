import { FETCH_MEMBERS } from '../constants/members'

export const fetchMembers = (members) => ({
  type: FETCH_MEMBERS,
  payload: members
})
