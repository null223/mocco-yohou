import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { logoutUser } from '../actions/user'
import { setFocus } from '../actions/board'

const mapStateToProps = state => ({
  user: state.user.user,
  isFocus: state.board.focus
})

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch(logoutUser())
  },
  setFocus(focus) {
    dispatch(setFocus(focus))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)