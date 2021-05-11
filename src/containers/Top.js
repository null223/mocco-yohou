import { connect } from 'react-redux'
import Top from '../components/Top'
import { loginUser } from '../actions/user'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loginUser(user) {
    console.log("login")
    dispatch(loginUser(user))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)