import styled, { css } from 'styled-components';
import firebase, { ui, providerTwitter } from './firebase';
import './App.css';
import 'firebaseui/dist/firebaseui.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  ui.start('#example', {
  signInOptions: [
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
  });

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then((result) => {
        console.log("success")
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = credential.accessToken;
        var secret = credential.secret;

        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  // return (
  //   <div className="App">
  //     <StBase id="example">
  //       <button onClick={handleLogin}>Login</button>
  //     </StBase>

  //   </div>
  // );
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/__/auth/handler">
              <div className="App">
                <StBase id="example">
                  logined
                </StBase>
              </div>
            </Route>
            <Route path="/">
              <div className="App">
                <StBase id="example">
                  <button onClick={handleLogin}>Login</button>
                </StBase>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

const StBase = styled.div`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
`;
