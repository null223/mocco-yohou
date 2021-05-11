import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import configStore from './store';
import Home from './containers/Home';

const store = configStore()

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
