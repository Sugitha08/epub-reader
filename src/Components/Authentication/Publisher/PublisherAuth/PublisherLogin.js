import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function PublisherLogin({ setShowLoginPage }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = () => {
    console.log(email , password);

    
  };

  return (
    <>
      <h3 className="login-title">LOGIN YOUR ACCOUNT</h3>
      <div className="login-form">
        <form className="form">
          <TextField
            label="Enter Your Email"
            variant="outlined"
            className="my-3 input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Enter Your Password"
            variant="outlined"
            className="my-2 input"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p>
            <a href="" className="m-2">
              Forgot Password
            </a>
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="btn w-100"

              
              onClick={handleLogin}
              style={{
                backgroundColor: "#4B4363",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              SIGN IN
            </button>
          </div>
        </form>
        <p className="or mt-3">Or</p>
        <div className="text-center">
          <p
            style={{
              color: "#464545",
              fontSize: "18px",
              fontWeight: "medium",
            }}
          >
            Sign in with Google
          </p>
        </div>
        <div className="text-center">
          <p style={{ color: "#000000", fontSize: "18px" }}>
            Don’t have an account?
            <span
              className="navigationLink"
              onClick={() => setShowLoginPage(false)}
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PublisherLogin;
