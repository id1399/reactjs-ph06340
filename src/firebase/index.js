 import firebase from 'firebase';
 import 'firebase/storage';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAQ4p98wAk8zdhWR3JCynpWp4TbU-9Xp9M",
    authDomain: "reactjs-cc2f4.firebaseapp.com",
    databaseURL: "https://reactjs-cc2f4.firebaseio.com",
    projectId: "reactjs-cc2f4",
    storageBucket: "reactjs-cc2f4.appspot.com",
    messagingSenderId: "760773720564",
    appId: "1:760773720564:web:3e991d003e8bed1a9c21a1",
    measurementId: "G-MWFL75KG13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase