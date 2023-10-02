import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from "../Redux/actions";
import SignInWithGoogle from "../Services/googleAuth";

function Home() {
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const signedInUser = await SignInWithGoogle();
      console.log(signedInUser);
      dispatch(setUser(signedInUser))
    } catch (error) {
      // Handle sign-in error
      console.error('Sign-in error:', error);
    }
  };
  
  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default Home