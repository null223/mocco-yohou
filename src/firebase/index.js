import firebase from 'firebase/app';
// import 'firebase/firestore'; //firestoreを使う場合
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const env = process.env;

firebase.initializeApp({
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP_AUTH_DOMAIN,
  projectId: env.REACT_APP_PROJECT_ID,
  storageBucket: env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
  appId: env.REACT_APP_FIREBASE_APP_ID,
});

export const ui = new firebaseui.auth.AuthUI(firebase.auth());

// export const providerGoogle = new firebase.auth.GoogleAuthProvider();
// export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
// export const db = firebase.firestore(); //firestoreを使う場合
export default firebase;