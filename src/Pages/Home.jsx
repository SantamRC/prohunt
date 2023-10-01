import React from 'react'
import signInWithGoogle from "../Services/googleAuth";

function Home() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In </button>
      </div>
  )
}

export default Home