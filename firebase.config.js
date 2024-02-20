// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0brfkwNOTwCK2tmvVGwNQQd_GOLIGLa8",
  authDomain: "post-editor-98d5b.firebaseapp.com",
  projectId: "post-editor-98d5b",
  storageBucket: "post-editor-98d5b.appspot.com",
  messagingSenderId: "780394611655",
  appId: "1:780394611655:web:69ccd2f2a6c9cee1becfe2",
  measurementId: "G-4VLXLLD8P2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = {
  auth,
};
