import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { logoutUser } from '../actions/user'

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch(logoutUser())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)