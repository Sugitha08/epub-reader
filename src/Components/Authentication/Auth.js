import React, { useState } from "react";
import vector from "../Assets/image.jpg";
import "./Login.css";
import Register from "./Register";
import Login from "./Login";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <>
    <div>
      <div className="row auth-container align-items-center" style={{height:"100%"}}>
        <div className="col-sm-12 col-md-6 col-lg-6 vector-img p-4 text-center">
          <img src={vector} alt="Vector" className="mx-auto" style={{ width: "85%" ,height:"80%",borderRadius:"10px" }} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 login-wrapper">
          <Outlet/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Auth;
