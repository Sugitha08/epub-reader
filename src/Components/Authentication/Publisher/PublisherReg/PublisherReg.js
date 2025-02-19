import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function PublisherReg({ setShowLoginPage }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [passwordVisible, setPasswordVisibile] = useState(false);
  const [passwordCVisible, setPasswordCVisibile] = useState(false);
  const handleRegister = () => {
    console.log(userName, email, password, repassword);
  };
  return (
    <>
      <h3 className="login-title my-3">CREATE AN ACCOUNT</h3>
      <div className="login-form">
        <form className="form">
          <TextField
            fullWidth
            label="UserName"
            variant="outlined"
            className="input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                    <FaUser />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                    <MdEmail />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            fullWidth
            type={passwordVisible ? "text" : "password"}
            label="Password"
            variant="outlined"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                    {passwordVisible ? (
                      <FaEyeSlash onClick={() => setPasswordVisibile(false)} />
                    ) : (
                      <FaEye onClick={() => setPasswordVisibile(true)} />
                    )}
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            fullWidth
            type={passwordCVisible ? "text" : "password"}
            label="Re-Enter Password"
            variant="outlined"
            className="input"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                    {passwordCVisible ? (
                      <FaEyeSlash onClick={() => setPasswordCVisibile(false)} />
                    ) : (
                      <FaEye onClick={() => setPasswordCVisibile(true)} />
                    )}
                  </InputAdornment>
                ),
              },
            }}
          />
          {/* <p>
            <a href="" className="m-2">
              Forgot Password
            </a>
          </p> */}
          <div className="mt-4">
            <button
              type="button"
              className="btn w-100 button"
              onClick={handleRegister}
            >
              SIGN UP
            </button>
          </div>
        </form>
        <p className="or my-2">
          <span className="line" />
          OR
          <span className="line" />
        </p>
        <div className="p-text">
          <p>
            <FcGoogle className="google mx-1" />
            Sign Up with Google
          </p>
          <p>
            Already have an Account?
            <span
              className="navigationLink"
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
