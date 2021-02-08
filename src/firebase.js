import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAJRR6GccPRnEwXaYviZ3MNIVHIvRNg1v4",
  authDomain: "imessage-ba6a7.firebaseapp.com",
  databaseURL: "https://imessage-ba6a7.firebaseio.com",
  projectId: "imessage-ba6a7",
  storageBucket: "imessage-ba6a7.appspot.com",
  messagingSenderId: "575764997876",
  appId: "1:575764997876:web:2af74268f34d5d817a20a1",
  measurementId: "G-JBX27ZHGZK",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
