// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDl5oPwhrZY6Im9AqglCidOEOUs1N2cxwA",
    authDomain: "facebook-clone-c181b.firebaseapp.com",
    projectId: "facebook-clone-c181b",
    storageBucket: "facebook-clone-c181b.appspot.com",
    messagingSenderId: "780996553964",
    appId: "1:780996553964:web:7d6b2c3ac118ca9fda89c9",
    measurementId: "G-63VHNX2B8V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;