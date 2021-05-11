import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware())
  )

  return store
}