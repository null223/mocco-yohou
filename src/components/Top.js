import { useEffect } from 'react';
import firebase, { ui } from '../config/firebase';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, loginUser}) => {
  useEffect(() => {
    ui.start('#loginBox', {
      callbacks: {
        signInSuccessWithAuthResult: function(currentUser, credential, redirectUrl) {
          loginUser(firebase.auth().currentUser)
          return false;
        }
      },
      signInOptions: [
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div>
    <h1>mocco予報</h1>
    <div id="loginBox" />
  </div>
  )
}