import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function PublisherLogin({ setShowLoginPage }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisible, setPasswordVisibile] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(email, password);
    navigate("/dashboard");
  };

  return (
    <>
      <h3 className="login-title align-self-center">LOGIN YOUR ACCOUNT</h3>
      <div className="login-form">
        <form className="form mt-3">
          <TextField
            fullWidth
            label="Enter Your Email"
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
            label="Enter Your Password"
            variant="outlined"
            className="input"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
          <p>
            <a href="" className="m-2">
              Forgot Password
            </a>
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="btn w-100 button"
              onClick={handleLogin}
            >
              SIGN IN
            </button>
          </div>
        </form>
        <p className="or my-3">
          <span className="line" />
          OR
          <span className="line" />
        </p>
        <div className="p-text">
          <p>
            <FcGoogle className="google mx-1" />
            Sign in with Google
          </p>
          <p>
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
