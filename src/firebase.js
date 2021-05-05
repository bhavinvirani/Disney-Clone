import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCZCG39yVvX5X3EDhOYJuUVtl9TQjIDggU",
    authDomain: "disneyplus-clone-36d33.firebaseapp.com",
    projectId: "disneyplus-clone-36d33",
    storageBucket: "disneyplus-clone-36d33.appspot.com",
    messagingSenderId: "175784743983",
    appId: "1:175784743983:web:bd28dc0e6fbdb04ecce2da",
    measurementId: "G-SCZ3XRV7CJ"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const store = firebase.storage();

export {auth, provider, store};
export default db;