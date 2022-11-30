import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5BO2zmPRItygI_oYEFwuMhXKI6wsoXrg',
  authDomain: 'blog-app-3fd77.firebaseapp.com',
  projectId: 'blog-app-3fd77',
  storageBucket: 'blog-app-3fd77.appspot.com',
  messagingSenderId: '685185950798',
  appId: '1:685185950798:web:ab2e328cd229ed2dc34f1f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
