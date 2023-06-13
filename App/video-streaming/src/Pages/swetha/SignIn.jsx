import { useRef } from "react";
import { useState } from "react";
import "./SignInForm.css";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <h1>Video Streaming</h1>
          <button className="login">Sign Up</button>
        </div>
      </div>
      <div className="container">
        <h1>Explore the definition of Video Streaming and its working.</h1>
        <h2>Watch anywhere. Cancel anytime.Go limitless.</h2>
        
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
        <br />
        <span>
            New to Video Streaming? <b className="Signup">Sign up now.</b>
          </span>
      </div>
    </div>
  );
}