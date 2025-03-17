import React from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Publisher_Login_Request } from "../../../Redux/Action/PublisherAction/PuAuthAction";

function PubLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavToPubReg = () => {
    navigate("/publisher/register");
  };
  const PubLoginAction = (payload) => {
    dispatch(Publisher_Login_Request(payload));
  };
  return (
    <Login
      title="PUBLISHER LOGIN"
      resgisterNav={handleNavToPubReg}
      handleLogin={PubLoginAction}
    />
  );
}

export default PubLogin;
