// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU4ylwSkWdTVbaoH4zuG__rvSSKoiGnIU",
    authDomain: "awesome-electronics-acaed.firebaseapp.com",
    projectId: "awesome-electronics-acaed",
    storageBucket: "awesome-electronics-acaed.appspot.com",
    messagingSenderId: "583027546046",
    appId: "1:583027546046:web:20803d229d886248338bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;