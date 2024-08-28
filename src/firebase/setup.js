import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCX80r13QX_inumDdGuomxZ6pz1hHhB23k",
    authDomain: "clone-news-deyy.firebaseapp.com",
    projectId: "clone-news-deyy",
    storageBucket: "clone-news-deyy.appspot.com",
    messagingSenderId: "937641398962",
    appId: "1:937641398962:web:e5aff24f1555c0c72e2fab"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();