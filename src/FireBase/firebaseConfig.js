import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHGCzosGpGjYbubsg2ba8NqfjXngvpv_8",
  authDomain: "todo-app-501b4.firebaseapp.com",
  projectId: "todo-app-501b4",
  storageBucket: "todo-app-501b4",
  messagingSenderId: "980951241079",
  appId: "1:980951241079:web:eaad21d58063c9be8dd172",
  measurementId: "G-QKJ7D2Q8R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);

export { auth, db, signInWithGoogle, signOutUser };
