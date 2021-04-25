import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAv0K248A7UTMC2u2EwbymG7XFaxNomEEo",
  authDomain: "hulu-clone-24575.firebaseapp.com",
  projectId: "hulu-clone-24575",
  storageBucket: "hulu-clone-24575.appspot.com",
  messagingSenderId: "3445962371",
  appId: "1:3445962371:web:7ce11c50a4666106f38db6",
  measurementId: "G-K3CT0Q1K1X",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
