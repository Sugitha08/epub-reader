import React from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavToPubDash = () => {
    navigate("/user/dashboard");
  };
  const handleNavToUserReg = () => {
    navigate("/reader/register");
  };
  const UserLoginAction = (payload) => {
    // dispatch();
  };
  return (
    <Login
      title="U-LOGIN TO YOUR ACCOUNT"
      navigate={handleNavToPubDash}
      resgisterNav={handleNavToUserReg}
      handleLogin={UserLoginAction}
    />
  );
}

export default UserLogin;
