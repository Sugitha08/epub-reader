import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../Core-Components/Button";

function Login({ title, navigate, resgisterNav, handleLogin }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisibile] = useState(false);
  const {
    loading: PublisherLoad,
    LoginStatus: PublisherLogin,
    error,
  } = useSelector((state) => state?.PublisherLogin);
  const { loading: UserLoad, UserLoginStatus } = useSelector(
    (state) => state?.UserLogin
  );
  console.log(UserLoginStatus);

  const payload = { email, password };

  // const navigate = useNavigate();
  const handleSubmit = () => {
    handleLogin(payload);
    if(payload){
      navigate();
      localStorage.setItem("User_Auth_Token", "token generated");
    }
 
  };
  // useEffect(() => {
  //   if (PublisherLogin ||UserLoginStatus ) {
  //     navigate();
  //   }
  // }, [PublisherLogin, UserLoginStatus]);
  

  return (
    <>
      <div className="logo"></div>
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
            <CustomButton
              type="button"
              className="w-100 button"
              onClick={handleSubmit}
              // loading={PublisherLoad || UserLoad ? true : false}
            >
              SIGN IN
            </CustomButton>
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
