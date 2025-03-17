import React from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { User_Login_Request } from "../../../Redux/Action/UserAction/UserAuthAction";

function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavToUserReg = () => {
    navigate("/reader/register");
  };
  const UserLoginAction = (payload) => {
    dispatch(User_Login_Request(payload));
  };
  return (
    <Login
      title="READER LOGIN"
      resgisterNav={handleNavToUserReg}
      handleLogin={UserLoginAction}
    />
  );
}

export default UserLogin;
