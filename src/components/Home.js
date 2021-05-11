import Top from '../containers/Top'
import Dashboard from '../containers/Dashboard'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({user}) => {
  if (!user)
    return <Top />
  else
    return <Dashboard  />
}