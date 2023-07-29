import {signInWithGooglePopup,
  createUserDocumentFromAuth //we importing this func from firebase.utils so we can get access to our database
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);// we add our func here in the sign in function
  };
// after that in the inspector we can see we have an object, const {user} is an object which we pass to create user doc from this object user
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
