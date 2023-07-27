import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDeu_IKN4Ptc-g3thNinylj0QubAKmN40E",
  authDomain: "crwn-clothing-99da5.firebaseapp.com",
  projectId: "crwn-clothing-99da5",
  storageBucket: "crwn-clothing-99da5.appspot.com",
  messagingSenderId: "866578135388",
  appId: "1:866578135388:web:f7efe9015dca29a894a999",d
  
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
