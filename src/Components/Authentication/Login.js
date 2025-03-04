import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Publisher_Login_Request } from "../../Redux/Action/PublisherAction/PuAuthAction";

function Login({ title, navigate, resgisterNav, handleLogin }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisibile] = useState(false);
  const { loading, LoginStatus, error } = useSelector(
    (state) => state?.PublisherLogin
  );
  const payload = { email, password };

  // const navigate = useNavigate();
  const handleSubmit = () => {
    handleLogin(payload);
  };
  useEffect(() => {
    if (LoginStatus) {
      navigate();
    }
  }, [LoginStatus]);

  return (
    <>
      <h3 className="auth-title align-self-center">{title}</h3>
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
          <p>
            <a href="/resetpassword" className="m-2">
              Forgot Password
            </a>
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="btn w-100 button"
              onClick={handleSubmit}
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
            <span className="navigationLink" onClick={() => resgisterNav()}>
              Create an account
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
