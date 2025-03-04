import React, { useState } from "react";
import vector from "../Assets/vector.jpg";
import "./Login.css";
import Register from "./Register";
import Login from "./Login";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <>
      <div className="row auth-container">
        <div className="col-sm-12 col-md-6 col-lg-6 vector-img">
          <img src={vector} alt="Vector" style={{ width: "100%" }} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 login-wrapper">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Auth;
