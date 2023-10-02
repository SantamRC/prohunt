import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import firebaseApp from "../Config/firebase"

const provider = new GoogleAuthProvider();

const auth = getAuth();

const SignInWithGoogle = () => {

    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            resolve(user.uid)
        }).catch((error) => {
            reject(error)
        });
    })
}

export default SignInWithGoogle;
