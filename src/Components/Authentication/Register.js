import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Publisher_Register_Request } from "../../Redux/Action/PublisherAction/PuAuthAction";

function Register({ setShowLoginPage }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [passwordVisible, setPasswordVisibile] = useState(false);
  const [passwordCVisible, setPasswordCVisibile] = useState(false);
  const dispatch = useDispatch()

  const handleRegister = () => {
    const payload = {
      name: userName,
      email: email,
      password: password,
      phone: Number(phoneNum),
      address: city,
    };
    dispatch(Publisher_Register_Request(payload))
  };
  return (
    <>
      <h3 className="auth-title my-3">CREATE AN ACCOUNT</h3>
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
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
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
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <MdEmail />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            className="input"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <FaPhoneAlt />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            className="input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <FaLocationDot />
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
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
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
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
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

export default Register;
