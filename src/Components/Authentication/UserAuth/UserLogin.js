import React from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { User_Login_Request } from "../../../Redux/Action/UserAction/UserLoginAction";

function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavToUserDash = () => {
    navigate("/user/dashboard");
  };
  const handleNavToUserReg = () => {
    navigate("/reader/register");
  };
  const UserLoginAction = (payload) => {
    // dispatch(User_Login_Request(payload));
  };
  return (
    <Login
      title="READER LOGIN"
      navigate={handleNavToUserDash}
      resgisterNav={handleNavToUserReg}
      handleLogin={UserLoginAction}
    />
  );
}

export default UserLogin;
