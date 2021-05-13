import { connect } from 'react-redux'
import BoardBottom from '../components/BoardBottom'
import { logoutUser } from '../actions/user'
import { setFocus } from '../actions/board'
import { fetchMembers } from '../actions/members'

const mapStateToProps = state => ({
  user: state.user.user,
  isFocus: state.board.focus,
  members: state.members.members
})

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch(logoutUser())
  },
  setFocus(focus) {
    dispatch(setFocus(focus))
  },
  fetchMembers(place) {
    // get member by place
    const members = {}
    dispatch(fetchMembers(members))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBottom)