import React from "react";
import Register from "../Register";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();
  const handleNavToUserLogin = () => {
    navigate("/");
  };
  return <Register redirectTologin={handleNavToUserLogin} />;
}

export default UserRegister;
