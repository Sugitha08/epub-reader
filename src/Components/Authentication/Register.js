import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

function Register({ redirectTologin, handleReg }) {
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNum, setPhoneNum] = useState("");
  // const [city, setCity] = useState("");
  // const [password, setPassword] = useState("");
  // const [repassword, setRePassword] = useState("");
  const [passwordVisible, setPasswordVisibile] = useState(false);
  const [passwordCVisible, setPasswordCVisibile] = useState(false);
  const { RegStatus } = useSelector((state) => state.PublisherReg);
  const initialState = {
    userName: "",
    email: "",
    phoneNum: "",
    city: "",
    password: "",
    repassword: "",
  };

  const passwordsyntax = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const validation = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must have atleast 6 characters")
      .required("*this field is required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "password must have atleast 6 characters")
      .matches(passwordsyntax, "create a strong password")
      .required("*this field is required"),
    repassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "confirm password and password are not matching"
      )
      .required("*this field is required"),
    phoneNum: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("*this field is required"),
    city: Yup.string().required("*this field is required"),
  });

  const handleRegister = (value) => {
    const payload = {
      name: value.userName,
      email: value.email,
      password: value.password,
      phone: Number(value.phoneNum),
      address: value.city,
      geo_location: "Thanjavur",
    };
    handleReg(payload);
  };
  useEffect(() => {
    if (RegStatus) {
      redirectTologin();
    } else {
      return;
    }
  }, [RegStatus]);

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: { validation },
    onSubmit: (values) => handleRegister(values),
  });
  return (
    <>
      <h3 className="auth-title my-3">CREATE AN ACCOUNT</h3>
      <div className="login-form">
        <form className="form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="UserName"
            variant="outlined"
            className="input"
            value={formik.values.userName}
            onChange={formik.handleChange}
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
            value={formik.values.email}
            onChange={formik.handleChange}
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
            value={formik.values.phoneNum}
            onChange={formik.handleChange}
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
            value={formik.values.city}
            onChange={formik.handleChange}
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
            value={formik.values.password}
            onChange={formik.handleChange}
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
            value={formik.values.repassword}
            onChange={formik.handleChange}
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
            <span className="navigationLink" onClick={() => redirectTologin()}>
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
