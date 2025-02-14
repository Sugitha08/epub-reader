import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function PublisherReg({ setShowLoginPage }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const handleRegister = () => {
    console.log(userName, email, password, repassword);
  };
  return (
    <>
      <h3 className="login-title">CREATE AN ACCOUNT</h3>
      <div className="login-form">
        <form className="form">
          <TextField
            label="UserName"
            variant="outlined"
            className="my-3 input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            className="my-2 input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            className="my-2 input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Re-Enter Password"
            variant="outlined"
            className="my-2 input"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {/* <p>
            <a href="" className="m-2">
              Forgot Password
            </a>
          </p> */}
          <div className="mt-4">
            <button
              type="button"
              className="btn w-100"
              onClick={handleRegister}
              style={{
                backgroundColor: "#4B4363",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              SIGN UP
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
            Already have an Account?
            <span
              className="navigationLink mx-2"
              onClick={() => setShowLoginPage(true)}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PublisherReg;
