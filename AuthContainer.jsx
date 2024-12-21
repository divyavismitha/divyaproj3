import React, { useState } from "react";
import Signup from "./SignUp";
import Signin from "./SignIn";

const AuthContainer = () => {
  const [isSignup, setIsSignup] = useState(true);

  const togglePage = () => setIsSignup(!isSignup);

  return (
    <div>
      {isSignup ? (
        <Signup setIsLoggedIn={() => console.log("Logged In")} />
      ) : (
        <Signin setIsLoggedIn={() => console.log("Logged In")} />
      )}
      <p>
        {isSignup ? "Already have an account?" : "New user?"}{" "}
        <span onClick={togglePage} style={{ cursor: "pointer", color: "blue" }}>
          {isSignup ? "Sign In" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default AuthContainer;
