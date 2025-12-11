// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC09tpqn51s2Qo6T9-_n6zoBsbfSLy7I1M",
  authDomain: "form-auth-2.firebaseapp.com",
  projectId: "form-auth-2",
  storageBucket: "form-auth-2.firebasestorage.app",
  messagingSenderId: "829155802012",
  appId: "1:829155802012:web:1a5c294e5616d4e9562659",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export auth
export default auth;
