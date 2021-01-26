import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage.js";
import { useEffect } from "react";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// bez databas_url
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBdR2R86NqBnF9-yqd4ZPSd1r8K-bVvS3s",
  authDomain: "kopia-postmana-team-platform.firebaseapp.com",
  projectId: "kopia-postmana-team-platform",
  storageBucket: "kopia-postmana-team-platform.appspot.com",
  messagingSenderId: "675217722522",
  appId: "1:675217722522:web:4b80394802e4174b7d6323",
  measurementId: "G-DQ2DDHTMH8",
};

function App() {
  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    firebase.initializeApp(FIREBASE_CONFIG);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      }
    });

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {

      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error);
      });

  }

  return (
    <div className="App">
      <WelcomePage message="Welcome on starting page!" />
    </div>
  );
}

export default App;
