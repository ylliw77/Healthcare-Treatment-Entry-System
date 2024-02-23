// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAwNvTs5MdtNJ6jOy9D6MBeKVQ0ttHnRn8",
//   authDomain: "i-care-e024f.firebaseapp.com",
//   projectId: "i-care-e024f",
//   storageBucket: "i-care-e024f.appspot.com",
//   messagingSenderId: "329132187728",
//   appId: "1:329132187728:web:3669021f2652cf46427155"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../i-care-e024f-firebase-adminsdk-dnlm7-495db59bc6.json');

initializeApp({
    credential : cert(serviceAccount)
})

const db = getFirestore()

module.exports = {db}