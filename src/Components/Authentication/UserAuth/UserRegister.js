import React from "react";
import Register from "../Register";
import { useNavigate } from "react-router-dom";
import { User_Register_Request } from "../../../Redux/Action/UserAction/UserAuthAction";
import { useDispatch } from "react-redux";

function UserRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavToUserLogin = () => {
    navigate("/");
  };

  const handleReaderRegister = (payload) => {
    dispatch(User_Register_Request(payload));
  };
  return (
    <Register
      redirectTologin={handleNavToUserLogin}
      handleReg={handleReaderRegister}
    />
  );
}

export default UserRegister;
