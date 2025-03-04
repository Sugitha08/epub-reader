import React from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Publisher_Login_Request } from "../../../Redux/Action/PublisherAction/PuAuthAction";

function PubLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavToPubDash = () => {
    navigate("/publisher/dashboard");
  };

  const handleNavToPubReg = () => {
    navigate("/Publisher/register");
  };
  const PubLoginAction = (payload) => {
    console.log(payload);
    
    dispatch(Publisher_Login_Request(payload));
  };
  return (
    <Login
      title="P-LOGIN YOUR ACCOUNT"
      navigate={handleNavToPubDash}
      resgisterNav={handleNavToPubReg}
      handleLogin={PubLoginAction}
    />
  );
}

export default PubLogin;
