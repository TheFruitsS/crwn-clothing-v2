import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeu_IKN4Ptc-g3thNinylj0QubAKmN40E",
  authDomain: "crwn-clothing-99da5.firebaseapp.com",
  projectId: "crwn-clothing-99da5",
  storageBucket: "crwn-clothing-99da5.appspot.com",
  messagingSenderId: "866578135388",
  appId: "1:866578135388:web:f7efe9015dca29a894a999",
  
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// we acquire the class and store it in a variable provider

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  //next we create a snapshot so we can check our database if we have this object or not
  //this snapshot create the same identifier in the memory which we can use to compare if we have it already
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};


//we create variable and anonymous function and we must export them
//signInWithGooglePopup is anonymous function
//next is to enable Google Aut sign in method in Firebase
//After that we go to src/routes/sign-in/sign-in.component.jsx 
//create database in firestore  in production mode => rules in rules edit write:if true; and save
// after that we have to import methods getFirestore,doc,getDoc,setDoc
//next we create a db and we can instantiate it
//don't forget after acquiring a export const db '=' and the object

//we can see in the inspection in the browser -> console in our app the output so we can prepare our database.We have to notice a stsTokenManager ->uid

//we dont have users in our database or userAuth.uid in it,however google will create it for us